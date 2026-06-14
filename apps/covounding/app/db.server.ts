import path from "node:path";
import dotenv from "dotenv";

// Explicitly load root .env
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

import { prisma } from "@covound/db/client";

export { prisma };
