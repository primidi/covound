-- AlterTable
ALTER TABLE "Institution" ADD COLUMN "domain" TEXT;
ALTER TABLE "Institution" ADD COLUMN "publicKey" TEXT;

-- AlterTable
ALTER TABLE "VerifiedContact" ADD COLUMN "signature" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AnomalyReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceUrl" TEXT NOT NULL,
    "detectedNumber" TEXT NOT NULL,
    "detectedContext" TEXT,
    "severity" TEXT NOT NULL DEFAULT 'high',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "consensusCount" INTEGER NOT NULL DEFAULT 0,
    "investigatorId" TEXT,
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnomalyReport_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnomalyReport" ("createdAt", "detectedContext", "detectedNumber", "id", "institutionId", "severity", "sourceUrl", "status") SELECT "createdAt", "detectedContext", "detectedNumber", "id", "institutionId", "severity", "sourceUrl", "status" FROM "AnomalyReport";
DROP TABLE "AnomalyReport";
ALTER TABLE "new_AnomalyReport" RENAME TO "AnomalyReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
