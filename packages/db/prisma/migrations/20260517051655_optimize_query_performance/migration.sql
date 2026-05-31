-- CreateIndex
CREATE INDEX "AnomalyReport_detectedNumber_idx" ON "AnomalyReport"("detectedNumber");

-- CreateIndex
CREATE INDEX "Incident_scammerNumber_idx" ON "Incident"("scammerNumber");

-- CreateIndex
CREATE INDEX "VerifiedContact_phone_idx" ON "VerifiedContact"("phone");

-- CreateIndex
CREATE INDEX "VerifiedContact_whatsapp_idx" ON "VerifiedContact"("whatsapp");

-- CreateIndex
CREATE INDEX "VerifiedContact_domain_idx" ON "VerifiedContact"("domain");

-- CreateIndex
CREATE INDEX "user_reputationPoints_idx" ON "user"("reputationPoints");
