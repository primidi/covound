/*
  Warnings:

  - You are about to drop the `AnomalyReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnomalyVerification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArchivedIncident` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Incident` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerifiedContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "AnomalyReport_detectedNumber_idx";

-- DropIndex
DROP INDEX "AnomalyVerification_anomalyId_investigatorId_key";

-- DropIndex
DROP INDEX "ArchivedIncident_incidentId_key";

-- DropIndex
DROP INDEX "Incident_scammerNumber_idx";

-- DropIndex
DROP INDEX "Institution_name_key";

-- DropIndex
DROP INDEX "VerifiedContact_domain_idx";

-- DropIndex
DROP INDEX "VerifiedContact_whatsapp_idx";

-- DropIndex
DROP INDEX "VerifiedContact_phone_idx";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnomalyReport";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AnomalyVerification";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ArchivedIncident";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Incident";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Institution";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VerifiedContact";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "domain" TEXT,
    "publicKey" TEXT,
    "officialWebsite" TEXT,
    "officialHotline" TEXT,
    "recoverySteps" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "incident" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "story" TEXT NOT NULL,
    "scammerNumber" TEXT,
    "spoofedBank" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "verifierId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "incident_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "incident_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "incident_evidence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "incidentId" TEXT NOT NULL,
    "sanitizedUrl" TEXT NOT NULL,
    "originalEvidenceUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "incident_evidence_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "incident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "archived_incident" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "incidentId" TEXT NOT NULL,
    "encryptedStory" TEXT NOT NULL,
    "metadata" TEXT,
    "archivedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "verified_contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "whatsapp" TEXT,
    "domain" TEXT,
    "email" TEXT,
    "instagram" TEXT,
    "isOfficial" BOOLEAN NOT NULL DEFAULT true,
    "signature" TEXT,
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "verified_contact_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "anomaly_report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceUrl" TEXT NOT NULL,
    "detectedNumber" TEXT NOT NULL,
    "detectedContext" TEXT,
    "severity" TEXT NOT NULL DEFAULT 'high',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "consensusCount" INTEGER NOT NULL DEFAULT 0,
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "anomaly_report_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "anomaly_verification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "anomalyId" TEXT NOT NULL,
    "investigatorId" TEXT NOT NULL,
    "stakedPoints" INTEGER NOT NULL DEFAULT 10,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "anomaly_verification_anomalyId_fkey" FOREIGN KEY ("anomalyId") REFERENCES "anomaly_report" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "anomaly_verification_investigatorId_fkey" FOREIGN KEY ("investigatorId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'REPORTER',
    "isKycVerified" BOOLEAN NOT NULL DEFAULT false,
    "reputationPoints" INTEGER NOT NULL DEFAULT 0,
    "lastClaimedAt" DATETIME,
    "badges" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_user" ("badges", "createdAt", "email", "emailVerified", "id", "image", "isKycVerified", "lastClaimedAt", "name", "reputationPoints", "role", "updatedAt") SELECT "badges", "createdAt", "email", "emailVerified", "id", "image", "isKycVerified", "lastClaimedAt", "name", "reputationPoints", "role", "updatedAt" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE INDEX "user_reputationPoints_idx" ON "user"("reputationPoints");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- CreateIndex
CREATE INDEX "incident_scammerNumber_idx" ON "incident"("scammerNumber");

-- CreateIndex
CREATE UNIQUE INDEX "archived_incident_incidentId_key" ON "archived_incident"("incidentId");

-- CreateIndex
CREATE INDEX "verified_contact_phone_idx" ON "verified_contact"("phone");

-- CreateIndex
CREATE INDEX "verified_contact_whatsapp_idx" ON "verified_contact"("whatsapp");

-- CreateIndex
CREATE INDEX "verified_contact_domain_idx" ON "verified_contact"("domain");

-- CreateIndex
CREATE INDEX "anomaly_report_detectedNumber_idx" ON "anomaly_report"("detectedNumber");

-- CreateIndex
CREATE UNIQUE INDEX "anomaly_verification_anomalyId_investigatorId_key" ON "anomaly_verification"("anomalyId", "investigatorId");
