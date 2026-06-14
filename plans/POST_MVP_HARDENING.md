# Plan: Post-MVP Legal & Security Hardening [PRJ-SEC-01]

## 🎯 Goal
Implement cryptographically secure evidence handling, automated KYC, and PII archival to reach "Clinical Grade" security.

---

## 🛠️ Step 1: Evidence Integrity (Cryptographic Signing)
**Objective:** Ensure reported evidence is tamper-proof.

- [ ] **1.1 Implement HMAC Signing in `@covound/logic`**
  - Add utility to sign `AnomalyReport` records using a server-side secret.
  - Store the signature in a new `signature` column in the database.

---

## 🛠️ Step 2: Automated KYC (PrivyID/VIDA)
**Objective:** Replace the mock KYC with a real API integration.

- [ ] **2.1 Integrate PrivyID/VIDA Sandbox**
  - [ ] Add API client to `packages/logic`.
  - [ ] Update `apps/covounding/app/components/KYCModal.tsx` to handle the redirect/webhook flow.
  - [ ] Update `User` model to store `isVerified` and `verifiedIdentityId`.

---

## 🛠️ Step 3: Cold Storage & Archival Engine
**Objective:** Automate the 24-hour PII buffer and long-term AES-256 storage.

- [ ] **3.1 Build Archival Cron Job**
  - [ ] Use Google Cloud Scheduler or a serverless function.
  - [ ] Logic: Identify incidents > 24 hours old.
  - [ ] Action: Encrypt `originalEvidenceUrl` content and move to a "Cold Storage" bucket.
  - [ ] Action: Scrub `originalEvidenceUrl` and `story` PII from the active DB.

---

## ✅ Validation
- [ ] Attempt to modify a signed record directly in SQL; verify signature failure in UI.
- [ ] Complete a successful KYC flow in sandbox.
- [ ] Run the archival script manually; verify data is encrypted in GCS and scrubbed from local DB.
