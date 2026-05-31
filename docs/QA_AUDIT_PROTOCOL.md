# CoVound QA Audit Protocol: End-to-End MVP Testing
**Version:** 2.0.0
**Last Updated:** May 19, 2026

## Objective
Perform a zero-tolerance, end-to-end manual walkthrough of the complete CoVound ecosystem. This verifies the integration between the Browser Extension (`voundism`), the Web Portal (`covounding`), and the Admin Dashboard (`vounder`).

---

## Pre-Flight Setup

1. **Clean Slate:** Run the reset script to clear old test data.
   ```bash
   npx tsx scripts/reset-demo.ts
   ```\ndoor\nreset
2. **Start Servers:**
   - Terminal 1: `npm run dev` (inside `apps/covounding`) -> runs on `http://localhost:5173`
   - Terminal 2: `npm run dev` (inside `apps/vounder`) -> runs on `http://localhost:5174`
3. **Load Extension:**
   - Build the extension: `npm run build` (inside `apps/voundism`)
   - Go to `chrome://extensions/` in Chrome. Enable "Developer mode".
   - Click "Load unpacked" and select `apps/voundism/dist`.
4. **Create Test Page:**
   - Open http://localhost:5173/demo-scam.html in your browser.

---

## Test Scenario: The "Zero-to-Hero" Flow

### Phase 1: Voundism Shield (Initial Detection)
**Goal:** Verify the extension detects suspicious numbers and allows community flagging.

1. **Navigate to the Test Page:** Open `demo-scam.html` in Chrome.
2. **Observe the Shield:** Notice that the number `+6281234567890` has been automatically redacted and replaced with a yellow **"🔑 CircleHelp"** icon badge (inline-flex).
3. **Interactive Flagging:** Click the icon badge. The "Dr. Gia: Quick Triage" modal should appear (replaces hover behavior).
4. **Report:** Click **"Yes, Report as Scam"**. Ensure it says "✅ Anomaly Flagged".

### Phase 2: CoVounding Portal (Reporter Intake)
**Goal:** Verify a reporter can submit a formal, AI-analyzed report and get a legal PDF.

1. **Navigate:** Go to `http://localhost:5173/submit`.
2. **Step 1 (Chronology):** Type: *"I got a message from +6281234567890 saying my Local Fintech Entity account was blocked."* Verify the badge appears below the text area. Click **"Continue Diagnosis"**.
3. **Step 2 (Evidence):** Click to upload an image. Choose any image (e.g., `public/artifacts/sanitized-test.png`).
   - **⚠️ KNOWN BUG:** The image may fail to render on the canvas.
   - **⚠️ KNOWN BUG:** Drawing redaction boxes may leave persistent artifacts/extra lines.
   - Click **"Apply & Start AI Diagnosis"**. Wait for Dr. Gia's analysis. Click "Continue".
4. **Step 3 (Diagnosis):** Verify the "Detected Scammer" field shows the number. Click **"Isolate & Submit Threat"**.
5. **Step 4 (Prescription):** 
   - **⚠️ KNOWN BUG:** This step may fail to render or transition state correctly after submission.
   - Click **"Verify Identity for Legal Evidence"** (KYC). Wait for the simulated PrivyID success.
   - Click **"Download Verified Forensic Record"**. Verify the PDF downloads successfully.

### Phase 3: CoVounding Portal (Investigator Quorum)
**Goal:** Verify Investigators can review and stake points on reports.

1. **Login:** Open an Incognito window (or log out), go to `http://localhost:5173/login`.
2. **Investigator Access:** Select the "Investigator" tab. Log in with `admin@covound.com` / `password123`.
3. **Review Feed:** You should be redirected to the Triage Feed (`/investigate`).
4. **Stake & Verify:** You should see the `+6281234567890` anomaly in the list. Click **"Stake 10 pts & Verify"**.
   - Verify the Quorum counter updates to `1/2 Signatures`.

### Phase 4: Vounder Admin (The Source of Truth)
**Goal:** Verify Admins can promote threats to the global registry.

1. **Login:** Go to `http://localhost:5174/login`. Log in with `admin@covound.com` / `password123`.
2. **Dashboard:** Look at the "Threat Detection" table (red). 
3. **Force Promotion:** For demo purposes, click **"Promote"**.
4. **Verify Registry:** Confirm the number moves to the green "Verified Registry" table at the bottom.

### Phase 5: Voundism Shield (The Immunization)
**Goal:** Verify the extension instantly syncs the new truth and protects the user.

1. **Return to Test Page:** Go back to the tab with `test-html`.
2. **Force Sync:** Click the CoVound Extension icon in the Chrome toolbar. Click the **"Refresh Registry Snapshot"** button. Wait 1-2 seconds.
3. **Observe Immunization:** The badge on the page should instantly change from yellow "PENDING" to red **"⚠️ VOUNDISM: ANOMALY"**.
4. **Triage Button:** Click the "SOS Triage" button on the badge. Verify the large "Pertolongan Pertama Digital" emergency modal appears.

---
**END OF TEST.**