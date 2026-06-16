import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { getPrisma } from "~/db.server";

const ENCRYPTION_KEY =
  process.env.ARCHIVE_KEY || "default-secret-key-32-chars-long!!"; // Must be 32 chars
const IV_LENGTH = 16;

/**
 * Encrypts a string using AES-256-CBC.
 */
function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY),
    iv,
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

/**
 * Sunday Marathon Phase 3: Task 2
 * Moves incidents older than 24 hours to cold storage and wipes raw evidence.
 */
export async function archiveExpiredIncidents(env: Record<string, string | undefined>) {
  const prisma = getPrisma(env);
  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() - 24);

  console.log(
    `🏥 Archival Engine: Searching for incidents older than ${expiryDate.toISOString()}...`,
  );

  const expiredIncidents = await prisma.incident.findMany({
    where: {
      createdAt: { lt: expiryDate },
      isArchived: false,
    },
  });

  console.log(`🔍 Found ${expiredIncidents.length} incidents to archive.`);

  for (const incident of expiredIncidents) {
    try {
      await prisma.$transaction(async (tx) => {
        // 1. Move to Cold Storage
        await tx.archivedIncident.create({
          data: {
            incidentId: incident.id,
            encryptedStory: encrypt(incident.story),
            metadata: JSON.stringify({
              scammerNumber: incident.scammerNumber,
              spoofedBank: incident.spoofedBank,
              status: incident.status,
            }),
          },
        });

        // 2. Wipe Story from Active Record (Privacy Hardening)
        await tx.incident.update({
          where: { id: incident.id },
          data: {
            story: "[REDACTED - MOVED TO COLD STORAGE]",
            isArchived: true,
            originalEvidenceUrl: null, // Wipe reference
          },
        });
      });

      // 3. Permanently Delete Raw Artifact from Disk
      if (incident.originalEvidenceUrl) {
        const rawPath = path.join(
          process.cwd(),
          "../../storage/private/unredacted",
          path.basename(incident.originalEvidenceUrl),
        );
        try {
          await fs.unlink(rawPath);
          console.log(`✅ Permanently wiped raw evidence: ${rawPath}`);
        } catch (_e) {
          console.warn(
            `⚠️ Failed to delete file (may already be gone): ${rawPath}`,
          );
        }
      }

      console.log(`✅ Successfully archived incident: ${incident.id}`);
    } catch (error) {
      console.error(`❌ Failed to archive incident ${incident.id}:`, error);
    }
  }
}
