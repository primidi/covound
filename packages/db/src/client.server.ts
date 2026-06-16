import { PrismaClient } from "@covound/prisma-client/edge";

/**
 * Shared database connection for the CoVound monorepo.
 */
function createPrismaClient(datasourceUrl: string) {
  return new PrismaClient({
    datasourceUrl,
  });
}

function getPrisma(env: Record<string, string | undefined> | string) {
  const url = typeof env === "string" ? env : env?.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL environment variable is missing.");
  }

  const globalRecord = globalThis as typeof globalThis & { __db__?: PrismaClient };
  let prisma = globalRecord.__db__;
  if (!prisma) {
    prisma = createPrismaClient(url);
    if (typeof process !== "undefined" && process.env?.NODE_ENV !== "production") {
      globalRecord.__db__ = prisma;
    }
  }
  return prisma;
}

const prisma = (typeof process !== "undefined" && process.env?.DATABASE_URL)
  ? getPrisma(process.env)
  : (null as unknown as PrismaClient);

export { createPrismaClient, getPrisma, prisma };

