import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

// Explicitly load the root .env file if it exists
try {
  dotenv.config({ path: path.resolve(process.cwd(), ".env") });
} catch (e) {
  console.warn("⚠️ No .env file found during build, proceeding with defaults.");
}
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "file:/app/dev.db",
  },
});

  datasource: {
    url: process.env.DATABASE_URL || "file:/app/dev.db",
  },
});
