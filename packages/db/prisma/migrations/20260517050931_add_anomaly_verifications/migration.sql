/*
  Warnings:

  - You are about to drop the column `investigatorId` on the `AnomalyReport` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AnomalyVerification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "anomalyId" TEXT NOT NULL,
    "investigatorId" TEXT NOT NULL,
    "stakedPoints" INTEGER NOT NULL DEFAULT 10,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnomalyVerification_anomalyId_fkey" FOREIGN KEY ("anomalyId") REFERENCES "AnomalyReport" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AnomalyVerification_investigatorId_fkey" FOREIGN KEY ("investigatorId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "institutionId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AnomalyReport_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_AnomalyReport" ("consensusCount", "createdAt", "detectedContext", "detectedNumber", "id", "institutionId", "severity", "sourceUrl", "status") SELECT "consensusCount", "createdAt", "detectedContext", "detectedNumber", "id", "institutionId", "severity", "sourceUrl", "status" FROM "AnomalyReport";
DROP TABLE "AnomalyReport";
ALTER TABLE "new_AnomalyReport" RENAME TO "AnomalyReport";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AnomalyVerification_anomalyId_investigatorId_key" ON "AnomalyVerification"("anomalyId", "investigatorId");
