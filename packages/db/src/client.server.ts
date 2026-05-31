import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { PrismaClient } = require("../generated/client/index.js");

/**
 * Shared database connection for the CoVound monorepo.
 */
function createPrismaClient(dbUrl?: string) {
  // Default to the dev.db inside this package if no URL provided
  const connectionString = dbUrl || process.env.DATABASE_URL || `file:./dev.db`;
  const dbPath = connectionString.replace(/^file:/, "");

  // Ensure we use an absolute path for better-sqlite3
  // If the path is relative, force it to be relative to the prisma directory
  // to match Prisma CLI behavior.
  const absolutePath = path.isAbsolute(dbPath)
    ? dbPath
    : path.resolve(__dirname, "..", "prisma", path.basename(dbPath));

  const adapter = new PrismaBetterSqlite3({ url: absolutePath });
  return new PrismaClient({ adapter });
}

const prisma = (globalThis as any).__db__ || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).__db__ = prisma;
}

export { createPrismaClient, prisma };
