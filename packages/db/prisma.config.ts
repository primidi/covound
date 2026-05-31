import path from "node:path";
import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

// Explicitly load the root .env file
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "file:./prisma/dev.db",
  },
});
