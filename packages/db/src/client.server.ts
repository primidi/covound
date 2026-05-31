import path from "node:path";
import { fileURLToPath } from "node:url";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/client/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Shared database connection for the CoVound monorepo.
 */
function createPrismaClient(dbUrl?: string) {
  // Default to the dev.db inside this package if no URL provided
  const connectionString = dbUrl || process.env.DATABASE_URL || `file:./dev.db`;
  const dbPath = connectionString.replace(/^file:/, "");

  // Ensure we use an absolute path for better-sqlite3
  // When running in production (Cloud Run), relative paths like ./dev.db 
  // should resolve to the container's working directory (/app).
  const absolutePath = path.isAbsolute(dbPath)
    ? dbPath
    : path.resolve(process.cwd(), dbPath);

  const adapter = new PrismaBetterSqlite3({ url: absolutePath });
  return new PrismaClient({ adapter });
}

const prisma = (globalThis as any).__db__ || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).__db__ = prisma;
}

export { createPrismaClient, prisma };
