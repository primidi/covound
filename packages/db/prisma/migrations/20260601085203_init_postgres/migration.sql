-- CreateTable
CREATE TABLE "institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT,
    "publicKey" TEXT,
    "officialWebsite" TEXT,
    "officialHotline" TEXT,
    "recoverySteps" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'REPORTER',
    "isKycVerified" BOOLEAN NOT NULL DEFAULT false,
    "reputationPoints" INTEGER NOT NULL DEFAULT 0,
    "lastClaimedAt" TIMESTAMP(3),
    "badges" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident" (
    "id" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "scammerNumber" TEXT,
    "spoofedBank" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "verifierId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incident_evidence" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "sanitizedUrl" TEXT NOT NULL,
    "originalEvidenceUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incident_evidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "archived_incident" (
    "id" TEXT NOT NULL,
    "incidentId" TEXT NOT NULL,
    "encryptedStory" TEXT NOT NULL,
    "metadata" TEXT,
    "archivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "archived_incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verified_contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "whatsapp" TEXT,
    "domain" TEXT,
    "email" TEXT,
    "instagram" TEXT,
    "isOfficial" BOOLEAN NOT NULL DEFAULT true,
    "signature" TEXT,
    "institutionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verified_contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anomaly_report" (
    "id" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "detectedNumber" TEXT NOT NULL,
    "detectedContext" TEXT,
    "severity" TEXT NOT NULL DEFAULT 'high',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "consensusCount" INTEGER NOT NULL DEFAULT 0,
    "institutionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anomaly_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anomaly_verification" (
    "id" TEXT NOT NULL,
    "anomalyId" TEXT NOT NULL,
    "investigatorId" TEXT NOT NULL,
    "stakedPoints" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anomaly_verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kyc_request" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "encryptedNik" TEXT NOT NULL,
    "selfiePath" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kyc_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_reputationPoints_idx" ON "user"("reputationPoints");

-- CreateIndex
CREATE INDEX "incident_scammerNumber_idx" ON "incident"("scammerNumber");

-- CreateIndex
CREATE UNIQUE INDEX "archived_incident_incidentId_key" ON "archived_incident"("incidentId");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

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

-- CreateIndex
CREATE UNIQUE INDEX "kyc_request_userId_key" ON "kyc_request"("userId");

-- AddForeignKey
ALTER TABLE "incident" ADD CONSTRAINT "incident_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident" ADD CONSTRAINT "incident_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incident_evidence" ADD CONSTRAINT "incident_evidence_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verified_contact" ADD CONSTRAINT "verified_contact_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anomaly_report" ADD CONSTRAINT "anomaly_report_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anomaly_verification" ADD CONSTRAINT "anomaly_verification_anomalyId_fkey" FOREIGN KEY ("anomalyId") REFERENCES "anomaly_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anomaly_verification" ADD CONSTRAINT "anomaly_verification_investigatorId_fkey" FOREIGN KEY ("investigatorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kyc_request" ADD CONSTRAINT "kyc_request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
