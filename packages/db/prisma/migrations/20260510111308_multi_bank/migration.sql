-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "officialWebsite" TEXT,
    "officialHotline" TEXT,
    "recoverySteps" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnomalyReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceUrl" TEXT NOT NULL,
    "detectedNumber" TEXT NOT NULL,
    "detectedContext" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'high',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnomalyReport_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnomalyReport" ("createdAt", "detectedContext", "detectedNumber", "id", "severity", "sourceUrl", "status") SELECT "createdAt", "detectedContext", "detectedNumber", "id", "severity", "sourceUrl", "status" FROM "AnomalyReport";
DROP TABLE "AnomalyReport";
ALTER TABLE "new_AnomalyReport" RENAME TO "AnomalyReport";
CREATE TABLE "new_VerifiedContact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "whatsapp" TEXT,
    "domain" TEXT,
    "email" TEXT,
    "instagram" TEXT,
    "isOfficial" BOOLEAN NOT NULL DEFAULT true,
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VerifiedContact_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_VerifiedContact" ("createdAt", "domain", "email", "id", "instagram", "isOfficial", "name", "phone", "updatedAt", "whatsapp") SELECT "createdAt", "domain", "email", "id", "instagram", "isOfficial", "name", "phone", "updatedAt", "whatsapp" FROM "VerifiedContact";
DROP TABLE "VerifiedContact";
ALTER TABLE "new_VerifiedContact" RENAME TO "VerifiedContact";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Institution_name_key" ON "Institution"("name");
