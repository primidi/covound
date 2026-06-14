# CoVound QA Audit Protocol: End-to-End MVP Testing
**Version:** 3.0.0
**Last Updated:** June 13, 2026

## Objective
Perform a zero-tolerance, end-to-end manual walkthrough of the complete CoVound ecosystem to verify integration between the Browser Extension (`voundism`), the Web Portal (`covounding`), and the Admin Dashboard (`vounder`).

---

## Pre-Flight Setup

1. **Start Database Services:**
   Ensure your local PostgreSQL container is running:
   ```powershell
   docker-compose up -d
   ```
2. **Clean Slate & Reset:**
   Run the reset script to purge old test data:
   ```powershell
   npm run db:reset
   ```
3. **Start Applications:**
   - Terminal 1: `npm run dev` (inside `apps/covounding`) -> runs on `http://localhost:5173`
   - Terminal 2: `npm run dev` (inside `apps/vounder`) -> runs on `http://localhost:5174`
4. **Load Voundism Extension:**
   - Build the extension: `npm run build` (inside `apps/voundism`)
   - Go to `chrome://extensions/` in Chrome and enable "Developer mode".
   - Click "Load unpacked" and select `apps/voundism/dist`.
5. **Create Test Page:**
   - Open http://localhost:5173/demo-scam.html in your browser.

---

## Test Scenario: The "Zero-to-Hero" Flow

### Phase 1: Voundism Shield (Initial Detection)
**Goal:** Verify the extension detects suspicious numbers and allows community flagging.

1. **Navigate to Test Page:** Open `demo-scam.html` in Chrome.
2. **Observe the Shield:** Notice that the number `+6281234567890` is automatically redacted and replaced with a yellow **"🔑 CircleHelp"** icon badge.
3. **Interactive Flagging:** Click the icon badge. The "Dr. Gia: Quick Triage" modal should appear.
4. **Report Anomaly:** Click **"Yes, Report as Scam"**. Verify that the modal changes status to "✅ Anomaly Flagged".

### Phase 2: CoVounding Portal (Intake & Triage Room)
**Goal:** Verify a reporter can submit a bilingual, AI-analyzed report with multiple screenshots and receive a legal PDF.

1. **Navigate to Web Portal:** Go to `http://localhost:5173/report`.
2. **Bilingual Verification**: 
   - Click the language selector dropdown in the header.
   - Switch between **EN** and **ID**. Confirm all text strings (hero headers, instructions, text area labels) adapt dynamically.
3. **Step 1 (Chronology):** Type: *"I got a message from +6281234567890 saying my Local Fintech Entity account was blocked."* Verify the extracted phone number badge appears below the text area. Click **"Continue Diagnosis"**.
4. **Step 2 (Evidence & Multi-Image Triage):** 
   - Upload multiple screenshot images sequentially.
   - For each uploaded image, verify it renders on the canvas and you can draw manual redaction boxes to mask sensitive victim details.
   - Click **"Apply & Start AI Diagnosis"**. Verify Gemini Vision returns the correct scammer number coordinates and flags PII.
   - Click **"Continue"**.
5. **Step 3 (Diagnosis):** Verify the "Detected Scammer" field displays the standardized phone number. Click **"Isolate & Submit Threat"**.
6. **Step 4 (Prescription & CTAs):** 
   - Verify that the success state transitions smoothly.
   - Check that the post-submission CTA appears: *"Protect yourself from future Threat Vectors. Install Voundism."* (confirm bilingual equivalents render correctly when toggling language).
   - Click **"Verify Identity for Legal Evidence"** (KYC). Complete the simulated NIK/selfie verification.
   - Click **"Download Verified Forensic Record"**. Verify the STPL-formatted forensic PDF downloads successfully with all credentials.

### Phase 3: CoVounding Portal (Investigator Feed & Daily Mission)
**Goal:** Verify Investigators can claim Daily Missions and stake points.

1. **Login:** Go to `http://localhost:5173/login`.
2. **Access:** Select the "Investigator" tab. Log in using `admin@covound.com` / `password123`.
3. **Daily Mission Claim**:
   - Locate the "Daily Mission" card on the sidebar/dashboard.
   - Click **"Claim Daily Mission (+50 RP)"** and verify that the investigator's reputation points increment instantly.
4. **Review Feed (Carousel)**: 
   - Go to the Triage Feed (`/investigate`).
   - Click on the newly reported case. Verify that the evidence renders in a premium carousel component instead of a flat grid.
5. **Stake & Verify:** Click **"Stake 10 pts & Verify"**. Confirm the Quorum signature count updates to `1/2 Signatures`.

### Phase 4: Vounder Admin (Consensus Promotion)
**Goal:** Verify Admin dashboard controls and database promote actions.

1. **Login:** Go to `http://localhost:5174/login`. Log in using `admin@covound.com` / `password123`.
2. **Consensus Triage:** Look at the "Threat Detection" table (red) for pending reports.
3. **Registry Promotion:** Click **"Promote"** on the verified threat vector.
4. **Registry Verification:** Confirm that the anomaly moves to the green "Verified Registry" table at the bottom.

### Phase 5: Voundism Shield (Active Edge Immunization)
**Goal:** Verify the extension syncs the new verified threat vector and triggers immediate edge blockages.

1. **Return to Test Page:** Open `demo-scam.html` in Chrome.
2. **Force Sync:** Click the CoVound Extension icon in the Chrome toolbar. Click the **"Refresh Registry Snapshot"** button to force KV cache snapshot synchronization.
3. **Observe Immunization:** The badge beside `+6281234567890` on the page should change from yellow "PENDING" to red **"⚠️ VOUNDISM: ANOMALY"**.
4. **Triage Action:** Click the "SOS Triage" button on the badge. Verify the large "Pertolongan Pertama Digital" emergency modal appears.

---
**END OF TEST PROTOCOL.**