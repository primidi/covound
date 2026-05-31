# Today's Workflow: Multi-Bank Support & Reactive Defense

This document outlines the step-by-step workflow for today's immediate priorities (May 10, 2026). It pairs each task with the optimal AI Agent Skills to ensure clean architecture and persona consistency.

---

## Task 1: Registry Expansion (Multi-Bank Support)
**Objective:** Update the Prisma schema to handle multiple banking institutions and update the Remix Admin Dashboard UI to manage them.

**Target Files:** `web/prisma/schema.prisma`, `web/app/routes/admin.tsx`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("spec-driven-development")`
    *   *Action:* Define the exact schema changes needed. We likely need to add an `institution` field or create a separate `Institution` model.
2.  **Activate Skill:** `activate_skill("api-and-interface-design")`
    *   *Action:* Ensure the REST/Loader API in Remix scales correctly with the new schema without breaking the extension.
3.  **Execute:** Run Prisma migration (`npx prisma migrate dev`).
4.  **Activate Skill:** `activate_skill("frontend-ui-engineering")`
    *   *Action:* Update the Admin Dashboard to include a dropdown/filter for different institutions when adding verified contacts.

---

## Task 2: Anomaly Engine Scaling
**Objective:** Enhance the Gemini scraping script to accurately identify and categorize anomalies across different bank brands simultaneously.

**Target Files:** `anomaly-engine/src/hunt.ts`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("incremental-implementation")`
    *   *Action:* Update the Gemini LLM prompt. Instead of just asking "Is this a bank number?", ask it to return: `{"number": "...", "institutionSpoofed": "BCA/Mandiri/Jago", "context": "..."}`.
2.  **Activate Skill:** `activate_skill("debugging-and-error-recovery")`
    *   *Action:* Run the script against mocked text representing different banks to ensure the LLM JSON parsing does not break.

---

## Task 3: Institution-Specific Triage (MCP & API)
**Objective:** Provide tailored "Dr. Gia" responses based on *which* bank the user is asking about or being scammed by.

**Target Files:** `mcp-server/src/index.ts`, `web/app/routes/api.verify.ts`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("humanizer")`
    *   *Action:* Craft specific, calming responses for different scenarios. For example, if a BCA scam is detected, provide the official HaloBCA number in the error block.
2.  **Execute:** Update the MCP `verify_contact` tool logic to pull the `institution` name from the database and inject it dynamically into the Dr. Gia persona strings.

---

## Task 4: Post-Scam Reactive Workaround
**Objective:** Build a responsive UI in the Chrome Extension for users who realize they have already been scammed.

**Target Files:** `extension/src/content.tsx`, new UI components in `extension/src/`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("planning-and-task-breakdown")`
    *   *Action:* Define the UX. Where does the user click? (e.g., A "Panic Button" injected into the Google Search bar or the extension popup).
2.  **Activate Skill:** `activate_skill("react-components")` / `activate_skill("frontend-ui-engineering")`
    *   *Action:* Build a React component that acts as a checklist:
        *   [ ] Lock Bank Account (Link to official app/hotline)
        *   [ ] Disconnect linked devices
        *   [ ] Draft Police Report (`Surat Keterangan Polisi` template generator)
        *   [ ] Draft Bank Dispute Email (Using the template we created yesterday)
3.  **Execute:** Integrate this React component into the Vite build and ensure it injects cleanly into the DOM.

---

### How to Proceed
To begin a task, simply state: **"Let's start Task X"** and I will automatically activate the relevant skills and begin the development cycle.
