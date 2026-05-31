import path from "node:path";
import { prisma } from "@covound/db/client";
import dotenv from "dotenv";

// Explicitly load root .env
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

export { prisma };
