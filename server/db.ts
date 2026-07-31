import { eq, desc, like, ilike, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import {
  InsertUser, users, contacts, InsertContact,
  blogPosts, InsertBlogPost,
  newsletterSubscribers, InsertNewsletterSubscriber,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;
let _pool: Pool | null = null;

function buildNeonConfig() {
  const url = new URL(process.env.DATABASE_URL!);
  url.searchParams.delete('sslmode');
  url.searchParams.delete('channel_binding');
  return {
    connectionString: url.toString(),
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  };
}

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      const config = buildNeonConfig();
      _pool = new Pool(config);
      _db = drizzle(_pool);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot upsert user: database not available"); return; }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    const assignNullable = (field: (typeof textFields)[number]) => {
      const value = user[field];
      if (value === undefined) return;
      values[field] = value ?? null;
      updateSet[field] = value ?? null;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn) { values.lastSignedIn = user.lastSignedIn; updateSet.lastSignedIn = user.lastSignedIn; }
    if (user.role) { values.role = user.role; updateSet.role = user.role; }
    else if (user.openId === ENV.ownerOpenId) { values.role = 'admin'; updateSet.role = 'admin'; }
    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();
    await db.insert(users).values(values).onConflictDoUpdate({ target: [users.openId], set: updateSet });
  } catch (error) { console.error("[Database] Failed to upsert user:", error); throw error; }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function insertContact(contact: InsertContact) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(contacts).values(contact).returning();
}

// ── Contact List (for admin) ──────────────────────────────────────────────────
export async function listContacts(search?: string, page = 1, limit = 20) {
  const db = await getDb();
  if (!db) return { contacts: [], total: 0 };
  const offset = (page - 1) * limit;
  if (search) {
    const result = await db.select().from(contacts)
      .where(ilike(contacts.name, `%${search}%`))
      .orderBy(desc(contacts.createdAt))
      .limit(limit).offset(offset);
    const total = await db.select({ count: sql<number>`count(*)` }).from(contacts)
      .where(ilike(contacts.name, `%${search}%`));
    return { contacts: result, total: Number(total[0]?.count ?? 0) };
  }
  const result = await db.select().from(contacts).orderBy(desc(contacts.createdAt)).limit(limit).offset(offset);
  const total = await db.select({ count: sql<number>`count(*)` }).from(contacts);
  return { contacts: result, total: Number(total[0]?.count ?? 0) };
}

// ── Blog Posts ────────────────────────────────────────────────────────────────
export async function listBlogPosts(published?: boolean, page = 1, limit = 20) {
  const db = await getDb();
  if (!db) return { posts: [], total: 0 };
  const offset = (page - 1) * limit;
  let query;
  if (published !== undefined) {
    query = db.select().from(blogPosts).where(eq(blogPosts.published, published)).orderBy(desc(blogPosts.createdAt)).limit(limit).offset(offset);
  } else {
    query = db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt)).limit(limit).offset(offset);
  }
  const posts = await query;
  const totalQuery = published !== undefined
    ? await db.select({ count: sql<number>`count(*)` }).from(blogPosts).where(eq(blogPosts.published, published))
    : await db.select({ count: sql<number>`count(*)` }).from(blogPosts);
  return { posts, total: Number(totalQuery[0]?.count ?? 0) };
}

export async function getBlogPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createBlogPost(post: InsertBlogPost) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.insert(blogPosts).values(post).returning();
}

export async function updateBlogPost(id: number, updates: Partial<InsertBlogPost>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.update(blogPosts).set({ ...updates, updatedAt: new Date() }).where(eq(blogPosts.id, id)).returning();
}

export async function deleteBlogPost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
}

// ── Newsletter ────────────────────────────────────────────────────────────────
export async function subscribeNewsletter(email: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const normalized = email.trim().toLowerCase();
  try {
    const result = await db.insert(newsletterSubscribers).values({ email: normalized }).returning();
    return result;
  } catch (error: any) {
    // Duplicate email - already subscribed
    if (error?.code === "23505") {
      // Reactivate existing subscriber
      await db.update(newsletterSubscribers)
        .set({ active: true, subscribedAt: new Date() })
        .where(eq(newsletterSubscribers.email, normalized));
      return [{ email: normalized }];
    }
    throw error;
  }
}

export async function listNewsletterSubscribers(page = 1, limit = 50) {
  const db = await getDb();
  if (!db) return { subscribers: [], total: 0 };
  const offset = (page - 1) * limit;
  const result = await db.select().from(newsletterSubscribers)
    .orderBy(desc(newsletterSubscribers.subscribedAt)).limit(limit).offset(offset);
  const total = await db.select({ count: sql<number>`count(*)` }).from(newsletterSubscribers);
  return { subscribers: result, total: Number(total[0]?.count ?? 0) };
}
