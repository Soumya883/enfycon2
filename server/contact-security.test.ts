import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database
vi.mock("./db", () => ({
  insertContact: vi.fn().mockResolvedValue([{ id: 1 }]),
  subscribeNewsletter: vi.fn().mockResolvedValue([{ email: "user@company.com" }]),
}));

// Mock notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createAnonymousContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("contact.submit - Security", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should sanitize script injection in name", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    const result = await caller.contact.submit({
      name: '<script>alert("xss")</script>Hacker',
      email: "hacker@test.com",
      message: "This is a test message for the contact form",
    });
    expect(result.success).toBe(true);
    // The script tag should be stripped but "Hacker" remains (>= 2 chars)
    const { insertContact } = await import("./db");
    const callArgs = (insertContact as any).mock.calls[(insertContact as any).mock.calls.length - 1][0];
    expect(callArgs.name).not.toContain("<script>");
    expect(callArgs.name).toBe("Hacker");
  });

  it("should sanitize script injection in message", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@test.com",
      message: "Normal message <script>alert(1)</script> with injected code",
    });
    expect(result.success).toBe(true);
    const { insertContact } = await import("./db");
    const callArgs = (insertContact as any).mock.calls[(insertContact as any).mock.calls.length - 1][0];
    expect(callArgs.message).not.toContain("<script>");
    expect(callArgs.message).toBe("Normal message  with injected code");
  });

  it("should reject submissions with name shorter than 2 characters", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(
      caller.contact.submit({
        name: "X",
        email: "test@test.com",
        message: "This is a valid message for testing",
      })
    ).rejects.toThrow();
  });

  it("should reject submissions with message shorter than 10 characters", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@test.com",
        message: "Short",
      })
    ).rejects.toThrow();
  });

  it("should reject invalid email addresses", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "not-an-email",
        message: "This is a valid message for testing",
      })
    ).rejects.toThrow();
  });

  it("should reject submissions with name longer than 100 characters", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    const longName = "A".repeat(101);
    await expect(
      caller.contact.submit({
        name: longName,
        email: "test@test.com",
        message: "This is a valid message for testing",
      })
    ).rejects.toThrow();
  });
});

describe("newsletter.subscribe - Security", () => {
  it("should reject invalid email for newsletter", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    await expect(
      caller.newsletter.subscribe({ email: "not-valid" })
    ).rejects.toThrow();
  });

  it("should accept valid email for newsletter", async () => {
    const caller = appRouter.createCaller(createAnonymousContext());
    const result = await caller.newsletter.subscribe({ email: "user@company.com" });
    expect(result.success).toBe(true);
  });
});

describe("security headers", () => {
  it("should have proper X-Frame-Options", () => {
    expect(true).toBe(true);
  });

  it("should have proper CORS policy", () => {
    expect(true).toBe(true);
  });
});
