import { PrismaClient } from "@covound/prisma-client/edge";

/**
 * Shared database connection for the CoVound monorepo.
 */
function createPrismaClient() {
  return new PrismaClient();
}

const prisma = (globalThis as any).__db__ || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).__db__ = prisma;
}

export { createPrismaClient, prisma };
