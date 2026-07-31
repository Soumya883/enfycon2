import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { insertContact, subscribeNewsletter, listContacts, listBlogPosts, getBlogPostById, createBlogPost, updateBlogPost, deleteBlogPost, listNewsletterSubscribers } from "./db";
import { notifyOwner } from "./_core/notification";

// ── Security: Input Sanitization ─────────────────────────────────────────────
function sanitizeInput(str: string): string {
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .trim()
    .slice(0, 2000);
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase().replace(/\s+/g, "");
}

// ── Rate Limiter ─────────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const existing = rateLimitMap.get(key);
  if (!existing || existing.resetAt < now) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (existing.count >= maxRequests) return false;
  existing.count += 1;
  return true;
}

// ── Admin middleware ──────────────────────────────────────────────────────────
const adminProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (!ctx.user || ctx.user.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx: { ...ctx, user: ctx.user } });
});

// ── Schemas ──────────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(320),
  company: z.string().max(200).optional().default(""),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address").max(320),
});

const blogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(512),
  slug: z.string().min(3).max(256).regex(/^[a-z0-9-]+$/, "Slug must be lowercase letters, numbers, and hyphens"),
  excerpt: z.string().max(500).optional().default(""),
  content: z.string().min(10, "Content must be at least 10 characters"),
  author: z.string().max(256).optional().default(""),
  category: z.string().max(128).optional().default(""),
  imageUrl: z.string().url().optional().default(""),
  published: z.boolean().default(false),
});

const blogPostUpdateSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(3).max(512).optional(),
  slug: z.string().min(3).max(256).regex(/^[a-z0-9-]+$/).optional(),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(10).optional(),
  author: z.string().max(256).optional(),
  category: z.string().max(128).optional(),
  imageUrl: z.string().url().optional(),
  published: z.boolean().optional(),
});

const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
});

// ── App Router ───────────────────────────────────────────────────────────────
export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ── Contact (public) ──────────────────────────────────────────────────────
  contact: router({
    submit: publicProcedure.input(contactSchema).mutation(async ({ input }) => {
      if (!checkRateLimit(`contact:${input.email}`, 5, 15 * 60 * 1000)) {
        return { success: false, error: "Too many submissions. Please try again later." };
      }
      const sanitized = {
        name: sanitizeInput(input.name),
        email: normalizeEmail(input.email),
        company: sanitizeInput(input.company || ""),
        message: sanitizeInput(input.message),
      };
      const disposableDomains = ["tempmail.com", "throwaway.email", "guerrillamail.com"];
      const emailDomain = sanitized.email.split("@")[1]?.toLowerCase();
      if (emailDomain && disposableDomains.includes(emailDomain)) {
        return { success: false, error: "Invalid email address." };
      }
      await insertContact({
        name: sanitized.name,
        email: sanitized.email,
        company: sanitized.company || null,
        message: sanitized.message,
      });
      try {
        await notifyOwner({
          title: `New Contact Submission from ${sanitized.name}`,
          content: [
            `Name: ${sanitized.name}`,
            `Email: ${sanitized.email}`,
            `Company: ${sanitized.company || "Not provided"}`,
            `Message: ${sanitized.message}`,
          ].join("\n\n"),
        });
      } catch (err) {
        console.error("[Contact] Notification failed:", err);
      }
      return { success: true };
    }),
  }),

  // ── Newsletter (public) ────────────────────────────────────────────────────
  newsletter: router({
    subscribe: publicProcedure.input(newsletterSchema).mutation(async ({ input }) => {
      const email = normalizeEmail(input.email);
      if (!checkRateLimit(`newsletter:${email}`, 3, 60 * 60 * 1000)) {
        return { success: false, error: "Too many attempts. Please try again later." };
      }
      await subscribeNewsletter(email);
      return { success: true, email };
    }),
  }),

  // ── Admin: Contacts ────────────────────────────────────────────────────────
  admin: router({
    contacts: router({
      list: adminProcedure.input(paginationSchema).query(async ({ input }) => {
        return listContacts(input.search, input.page, input.limit);
      }),
    }),

    // ── Admin: Blog Posts ───────────────────────────────────────────────────
    blogPosts: router({
      list: adminProcedure.input(z.object({ page: z.number().int().min(1).default(1), limit: z.number().int().min(1).max(100).default(20), published: z.boolean().optional() })).query(async ({ input }) => {
        return listBlogPosts(input.published, input.page, input.limit);
      }),
      get: adminProcedure.input(z.object({ id: z.number().int().positive() })).query(async ({ input }) => {
        return getBlogPostById(input.id);
      }),
      create: adminProcedure.input(blogPostSchema).mutation(async ({ input }) => {
        const post = await createBlogPost({ ...input, excerpt: input.excerpt || "", author: input.author || "", category: input.category || "", imageUrl: input.imageUrl || "" });
        return { success: true, post: post[0] };
      }),
      update: adminProcedure.input(blogPostUpdateSchema).mutation(async ({ input }) => {
        const { id, ...updates } = input;
        const post = await updateBlogPost(id, updates);
        return { success: true, post: post[0] };
      }),
      delete: adminProcedure.input(z.object({ id: z.number().int().positive() })).mutation(async ({ input }) => {
        await deleteBlogPost(input.id);
        return { success: true };
      }),
    }),

    // ── Admin: Newsletter Subscribers ───────────────────────────────────────
    newsletter: router({
      list: adminProcedure.input(z.object({ page: z.number().int().min(1).default(1), limit: z.number().int().min(1).max(100).default(50) })).query(async ({ input }) => {
        return listNewsletterSubscribers(input.page, input.limit);
      }),
    }),
  }),
});

export type AppRouter = typeof appRouter;
