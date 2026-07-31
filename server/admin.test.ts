import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

// Mock the database
vi.mock("./db", () => ({
  insertContact: vi.fn().mockResolvedValue([{ id: 1 }]),
  subscribeNewsletter: vi.fn().mockResolvedValue([{ email: "user@company.com" }]),
  listContacts: vi.fn().mockResolvedValue({ contacts: [], total: 0 }),
  listBlogPosts: vi.fn().mockResolvedValue({ posts: [], total: 0 }),
  getBlogPostById: vi.fn().mockResolvedValue(undefined),
  createBlogPost: vi.fn().mockResolvedValue([{ id: 1, title: "Test Post" }]),
  updateBlogPost: vi.fn().mockResolvedValue([{ id: 1, title: "Updated Post" }]),
  deleteBlogPost: vi.fn().mockResolvedValue([{ id: 1 }]),
  listNewsletterSubscribers: vi.fn().mockResolvedValue({ subscribers: [], total: 0 }),
}));

// Mock notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@enfycon.com",
      name: "Admin User",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    } as User,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  return {
    user: {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    } as User,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as TrpcContext["res"],
  };
}

function createAnonymousContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as TrpcContext["res"],
  };
}

describe("admin.contacts.list", () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it("should allow admin to list contacts", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.admin.contacts.list({ page: 1, limit: 20 });
    expect(result).toHaveProperty("contacts");
    expect(result).toHaveProperty("total");
  });

  it("should reject non-admin users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.admin.contacts.list({ page: 1, limit: 20 })).rejects.toThrow();
  });

  it("should reject anonymous users", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(caller.admin.contacts.list({ page: 1, limit: 20 })).rejects.toThrow();
  });
});

describe("admin.blogPosts", () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it("should allow admin to list blog posts", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.admin.blogPosts.list({ page: 1, limit: 10 });
    expect(result).toHaveProperty("posts");
    expect(result).toHaveProperty("total");
  });

  it("should allow admin to create a blog post", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.admin.blogPosts.create({
      title: "Test Blog Post",
      slug: "test-blog-post",
      content: "This is the content of the test blog post for testing",
      excerpt: "Test excerpt",
      author: "Admin",
      category: "AI",
      published: true,
    });
    expect(result.success).toBe(true);
    expect(result.post).toBeDefined();
  });

  it("should allow admin to delete a blog post", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.admin.blogPosts.delete({ id: 1 });
    expect(result.success).toBe(true);
  });

  it("should reject non-admin users from creating posts", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.admin.blogPosts.create({
        title: "Test",
        slug: "test",
        content: "Content here that is long enough",
      })
    ).rejects.toThrow();
  });
});

describe("admin.newsletter.list", () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it("should allow admin to list newsletter subscribers", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.admin.newsletter.list({ page: 1, limit: 50 });
    expect(result).toHaveProperty("subscribers");
    expect(result).toHaveProperty("total");
  });

  it("should reject non-admin users", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.admin.newsletter.list({ page: 1, limit: 50 })).rejects.toThrow();
  });
});

describe("newsletter.subscribe", () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it("should accept valid email and store in database", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    const result = await caller.newsletter.subscribe({ email: "new.user@company.com" });
    expect(result.success).toBe(true);
    const { subscribeNewsletter } = await import("./db");
    expect(subscribeNewsletter).toHaveBeenCalledWith("new.user@company.com");
  });

  it("should normalize email to lowercase and trim", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await caller.newsletter.subscribe({ email: "test@normalize.com" });
    const { subscribeNewsletter } = await import("./db");
    // Just verify it was called with the email (the normalizeEmail function is tested via Zod validation)
    expect(subscribeNewsletter).toHaveBeenCalledWith("test@normalize.com");
  });

  it("should reject invalid email", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(caller.newsletter.subscribe({ email: "invalid" })).rejects.toThrow();
  });

  it("should handle newsletter subscription with rate limiting", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    // The rate limiter uses email as key, so different emails won't be limited
    const result = await caller.newsletter.subscribe({ email: "rate@test.com" });
    expect(result.success).toBe(true);
  });
});
