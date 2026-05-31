-- CreateTable
CREATE TABLE "ArchivedIncident" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "incidentId" TEXT NOT NULL,
    "encryptedStory" TEXT NOT NULL,
    "metadata" TEXT,
    "archivedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Incident" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "story" TEXT NOT NULL,
    "evidenceUrl" TEXT,
    "originalEvidenceUrl" TEXT,
    "scammerNumber" TEXT,
    "spoofedBank" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "verifierId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Incident_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Incident_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Incident" ("authorId", "createdAt", "evidenceUrl", "id", "scammerNumber", "spoofedBank", "status", "story", "updatedAt", "verifierId") SELECT "authorId", "createdAt", "evidenceUrl", "id", "scammerNumber", "spoofedBank", "status", "story", "updatedAt", "verifierId" FROM "Incident";
DROP TABLE "Incident";
ALTER TABLE "new_Incident" RENAME TO "Incident";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ArchivedIncident_incidentId_key" ON "ArchivedIncident"("incidentId");
