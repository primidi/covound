# Today's Workflow: Shadcn UI Integration

This document outlines the step-by-step workflow for today's task (May 11, 2026): Integrating Shadcn UI into the **vounder** Admin Dashboard to professionalize the interface.

---

## Task 1: Shadcn UI Initialization
**Objective:** Configure the `vounder` workspace for Shadcn UI components.

**Target File:** `vounder/package.json`, `vounder/vite.config.ts`, and root `vounder/` configuration.

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("frontend-ui-engineering")`
2.  **Activate Skill:** `activate_skill("incremental-implementation")`
3.  **Execute:** Run the Shadcn initialization command: `npx shadcn@latest init`. 
    *   *Note:* Ensure the CLI is directed to the `vounder` workspace and configured for Tailwind CSS v4 compatibility.

---

## Task 2: Component Installation
**Objective:** Add the UI building blocks required for the Admin Dashboard.

**Target Directory:** `vounder/app/components/ui/`

**Workflow & Skills:**
1.  **Execute:** Install the following Shadcn components:
    *   `npx shadcn@latest add table`
    *   `npx shadcn@latest add input`
    *   `npx shadcn@latest add button`
    *   `npx shadcn@latest add card`
    *   `npx shadcn@latest add form`
    *   `npx shadcn@latest add select`

---

## Task 3: Admin UI Refactor
**Objective:** Rebuild the Admin Dashboard using the new components.

**Target File:** `vounder/app/routes/admin.tsx`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("frontend-ui-engineering")`
2.  **Action:** Replace the custom Tailwind table and forms with the Shadcn `Table`, `Input`, `Select`, and `Card` components.
3.  **Activate Skill:** `activate_skill("code-review-and-quality")`
4.  **Verification:** Ensure the dashboard remains fully functional (loaders/actions work) and is visually consistent with the "Dr. Gia" persona.

---

### How to Proceed
To begin the first task, run: **`npm run workflows:up`**
Upon successful completion, please update the docs/ai-workflows/.executed.json file by adding '20260511080000_shadcn_ui_integration.md' to the list.
