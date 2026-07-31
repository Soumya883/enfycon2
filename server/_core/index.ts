import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

// ── Security Headers Middleware (Helmet-like) ──────────────────────────────
function securityHeaders() {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // Prevent clickjacking
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    // Prevent MIME-type sniffing
    res.setHeader("X-Content-Type-Options", "nosniff");
    // Enable XSS protection
    res.setHeader("X-XSS-Protection", "1; mode=block");
    // Referrer policy
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    // Remove server header
    res.removeHeader("X-Powered-By");
    // Content security policy (relaxed for SPA)
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https: blob:;");
    // Permissions policy
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    next();
  };
}

// ── CORS Hardening ────────────────────────────────────────────────────────
function corsPolicy() {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const allowedOrigins = [
      "https://enfydigital-3eunrqqs.manus.space",
      "https://enfycon.com",
      "http://localhost:3000",
    ];
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "86400");

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }
    next();
  };
}

// ── Request Logging ───────────────────────────────────────────────────────
function requestLogger() {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const start = Date.now();
    res.on("finish", () => {
      const duration = Date.now() - start;
      if (duration > 1000) {
        console.warn(`[Slow] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
      } else {
        console.log(`[OK] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
      }
    });
    next();
  };
}

// ── Error Handler ─────────────────────────────────────────────────────────
function errorHandler() {
  return (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("[Error]", err.message, err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  };
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Apply security middleware
  app.use(securityHeaders());
  app.use(corsPolicy());
  app.use(requestLogger());

  // Configure body parser with limits
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ limit: "10mb", extended: true }));

  // Register routes
  registerStorageProxy(app);
  registerOAuthRoutes(app);

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // Error handler (must be last)
  app.use(errorHandler());

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
