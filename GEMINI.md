# CoVound: Contextual Orchestrator & Workflow Mandate

## 🚨 MANDATORY: FIRST TURN CONTEXT LOAD
To ensure absolute robustness and alignment with our "Strict Zero-Trust" and "Digital ER" mission, every AI agent MUST read the four strategic pillars in the **first turn** of every session/interaction:
1.  **`docs/PRODUCT.md`**: Core concept, mission, and risk management.
2.  **`docs/ENGINEERING.md`**: Monorepo rules, secure standards, and mandatory workflows.
3.  **`docs/SPECS.md`**: Functional requirements (FRx.x) and tactical roadmap.
4.  **`docs/CONTEXT.md`**: Domain glossary to prevent fuzzy language.

---

## 🛠️ PM-Led Engineering Workflow
Coding never starts without a plan. Follow this sequence strictly:
1.  **Map:** Search for Requirement IDs (FRx.x) in `docs/SPECS.md`.
2.  **Plan:** Draft an Implementation Plan in `plans/` referencing these IDs.
3.  **Approve:** Wait for user confirmation before any modification.
4.  **Execute:** Surgical implementation + `npm run typecheck`.

### 🚨 SHELL SAFETY RULE
- **Zero-Tolerance for Bulk Deletion:** NEVER use recursive deletion commands (`rm -rf`, `Remove-Item -Recurse -Force`) on source code or component directories (`app/`, `src/`, `components/`) without a verified git commit to fall back on. 
- **Incident Reference:** The original `KYCModal.tsx` with PrivyID integration was lost due to a rogue shell command. Surgical cleanup only.

---

## 🛡️ Engineering Standards
- **Modular Monorepo:** Logic must live in `@packages/`. Never duplicate code in `apps/`.
- **Persona-as-Code:** Use `@covound/logic/src/persona.ts` for all UI copy. No hardcoded "vibe."
- **Zero-Trust:** Every boundary must use Zod validation. Every registry entry must be PKI-signed.

**"We build with clinical precision and empathetic intent. Let's create the digital utopia together."**

---

## 🧠 Gemini 3 CLI Prompting & Development Strategy

To harness the full capabilities of the Gemini 3 models within this CLI environment, follow these rules for prompting, brainstorming, and execution to ensure maximum efficiency and effectiveness.

### 1. Model Tiering for CLI Tasks
Choose the right model tier (via CLI configuration or explicit instruction) based on the cognitive load of the task:
*   **Gemini 3 Flash (The Executor):**
    *   **Use for:** Rapid iterative coding, targeted bug fixes, syntax conversions, and executing predefined implementation plans.
    *   **Prompting Style:** Directives. Give explicit commands ("Refactor this component to use `forwardRef`", "Write unit tests for `auth.server.ts`").
*   **Gemini 3 Pro (The Architect):**
    *   **Use for:** Architectural brainstorming, complex system design, deep debugging of distributed issues, and creating initial project specs (`docs/SPECS.md`).
    *   **Prompting Style:** Inquiries & Context Heavy. Provide broad context, ask for trade-offs, and request multiple viable approaches before committing to code.

### 2. Autonomous Skill Discovery & Installation
The CLI must leverage its ecosystem of specialized skills to augment its capabilities.
*   **Dynamic Resolution:** Before beginning a complex task, the CLI must autonomously determine if a specialized skill exists for the domain (e.g., UI engineering, TDD, debugging).
*   **Auto-Installation:** If an appropriate skill is identified but not currently active, the CLI must proactively use the `find-skills` or `using-agent-skills` mechanism to locate, install, and activate the required skill before proceeding with the task.
*   **Explicit Invocation:** Users can force this behavior by stating: *"Find and use the best skill for [Task]."*

### 3. The Brainstorming Protocol (Convergent Thinking)
When brainstorming new features or solving ambiguous problems:
1.  **Diverge (Pro Model):** Start by asking the agent to generate 3-4 distinct approaches to the problem, outlining pros/cons, security implications, and scalability for each.
2.  **Evaluate:** Review the options and select the path that best fits the "Zero-Trust" and "Clinical" personas.
3.  **Converge & Plan:** Instruct the agent to create a concrete, step-by-step implementation plan (saved to `plans/`) based *only* on the selected approach.
4.  **Execute (Flash Model):** Once the plan is approved, switch to execution mode to churn through the code changes quickly.

### 4. Context & Prompt Optimization (Token Discipline)
Gemini 3 models have massive context windows, but filling them unnecessarily slows down responses and degrades focus.
*   **The "Read-First" Rule:** Do not paste huge blocks of code into the chat prompt. Instead, instruct the CLI: *"Read `packages/ui/dialog.tsx` and fix the ref forwarding."*
*   **Surgical Edits:** Ask the agent to perform surgical edits using `replace` rather than rewriting entire files.
*   **Use Hooks/Sub-agents:** For tasks touching >3 files, explicitly instruct the CLI to use `@codebase_investigator` or the `generalist` sub-agent to gather context before answering.

### 5. Interactive Development Loop
*   **Stop-and-Confirm:** Never ask the AI to "Build the whole feature." Ask it to build Phase 1, review the diff, run `npm run typecheck`, and then proceed to Phase 2.

