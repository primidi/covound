# Workflow: Voundism Interactive Verification Flow & End-to-End QA

**Target Date:** Tuesday, May 19, 2026

This document outlines the step-by-step workflow to finalize the connection between the **Voundism Shield** (Extension) and the **CoVounding** (Web Portal). Completing these tasks is mandatory before executing the final "Medical Board" end-to-end manual testing.

---

## Task 1: Build the Registry Sync API (`covounding`)
**Objective:** Expose the cryptographically verified contact registry so the extension can download the "Marketplace of Truth" and perform its zero-trust DOM scans.

**Target File:** `apps/covounding/app/routes/api.snapshot.ts`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("api-and-interface-design")`
2.  **Action:** Create a loader function that queries `@covound/db` for all `VerifiedContact` entries.
3.  **Action:** Ensure the response is formatted correctly (e.g., `{ contacts: [...] }`) and includes generous CORS headers `Access-Control-Allow-Origin: *` so the browser extension can fetch it.

---

## Task 2: Build the Ingress Verification API (`covounding`)
**Objective:** Create a secure endpoint that allows the browser extension to push new, unverified numbers directly into the Investigator Triage Queue.

**Target File:** `apps/covounding/app/routes/api.report-anomaly.ts`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("security-and-hardening")`
2.  **Action:** Implement an action function to receive `POST` requests containing `detectedNumber`, `sourceUrl`, and `institutionName`.
3.  **Action:** Validate the payload using the shared Zod schemas from `@covound/logic`.
4.  **Action:** Create a new `AnomalyReport` in the database with `status: "PENDING"` and `severity: "COMMUNITY_FLAGGED"`. 

---

## Task 3: Interactive Extension UI (`voundism`)
**Objective:** Replace the raw HTML injection in the content script with a responsive React component. When an unknown number is detected, hovering the badge should open an interactive modal.

**Target Files:** `apps/voundism/src/content.tsx`, `apps/voundism/src/components/ReportModal.tsx`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("react-components")`
2.  **Action:** Build `<ReportModal />`. It should ask: *"Does this number claim to be an official bank?"* with buttons: **"Yes, Report as Scam"** and **"No, Safe Number"**.
3.  **Action:** Refactor `content.tsx` to mount a React root at the location of the detected number, rendering the badge and the new modal.
4.  **Action:** Wire the "Report as Scam" button to send a `fetch` request to the `/api/report-anomaly` endpoint created in Task 2.

---

## Task 4: Extension Dashboard Polish (`voundism`)
**Objective:** Clean up the default Vite template in the extension popup and replace it with a proper "Shield Status" dashboard.

**Target File:** `apps/voundism/src/App.tsx`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("frontend-ui-engineering")`
2.  **Action:** Replace the default counter with a "Dr. Gia" status UI. 
3.  **Action:** It should read the local cache (`chrome.storage.local.get("vounder_registry")`) and display: *"Shield Active: Protecting you from [X] known anomalies."*

---

## Phase 10: The Medical Board Walkthrough (Final Testing)
Once Tasks 1-4 are complete, execute the manual testing protocol:

1.  **Start Services:** Run `npm run dev:covounding` and `npm run dev:vounder`. Load the unpacked `voundism` extension into Chrome.
2.  **Test the Shield:** Navigate to a test page with a fake bank number. Verify the React badge injects correctly.
3.  **Test the Ingress:** Hover the badge, click "Report as Scam".
4.  **Test the Quorum:** Log in to `http://localhost:5173/login` as an Investigator (`admin@covound.com`). Verify the reported number is in the Triage Feed. Click "Stake and Verify".
5.  **Test the Promotion:** Log in to the Admin Dashboard (`http://localhost:5174/admin`). Promote the anomaly. 
6.  **Test the Sync:** Wait 5 minutes (or force refresh the extension). Verify the number is no longer flagged as "Pending" but is completely redacted as a "Verified Anomaly."

---
### How to Proceed
To begin this workflow tomorrow, simply tell the Gemini CLI: **"Lets start Task 1 from the voundism interactive workflow."**
