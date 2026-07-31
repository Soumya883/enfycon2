import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database
vi.mock("./db", () => ({
  insertContact: vi.fn().mockResolvedValue([{ insertId: 1 }]),
}));

// Mock notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createContext(): TrpcContext {
  return {
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
    user: null,
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid contact submission with all fields", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Corp",
      message: "I need AI solutions for my business.",
    });

    expect(result).toEqual({ success: true });

    const { insertContact } = await import("./db");
    expect(insertContact).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Corp",
      message: "I need AI solutions for my business.",
    });
  });

  it("accepts a submission without company field", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Looking for IT staffing solutions.",
    });

    expect(result).toEqual({ success: true });

    const { insertContact } = await import("./db");
    expect(insertContact).toHaveBeenCalledWith({
      name: "Jane Smith",
      email: "jane@example.com",
      company: null,
      message: "Looking for IT staffing solutions.",
    });
  });

  it("sends owner notification on successful submission", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      company: "TestCorp",
      message: "Hello, this is a test message for the contact form.",
    });

    const { notifyOwner } = await import("./_core/notification");
    expect(notifyOwner).toHaveBeenCalledWith({
      title: "New Contact Submission from Test User",
      content: [
        "Name: Test User",
        "Email: test@example.com",
        "Company: TestCorp",
        "Message: Hello, this is a test message for the contact form.",
      ].join("\n\n"),
    });
  });

  it("rejects submission with empty name", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "Hello, this is a test message!",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        message: "Hello, this is a test message!",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty message", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });

  it("still succeeds even if notification fails (graceful degradation)", async () => {
    const { notifyOwner } = await import("./_core/notification");
    (notifyOwner as any).mockRejectedValueOnce(new Error("Notification failed"));

    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Grace Test",
      email: "grace@example.com",
      company: "GraceCorp",
      message: "Testing graceful degradation.",
    });

    expect(result).toEqual({ success: true });
  });
});
