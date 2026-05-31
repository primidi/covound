# CoVound: Technical Specs & Roadmap

## 1. Functional Requirements (MVP)

### FR1: Reporter Triage (The Intake)
- **FR1.1:** Bilingual (EN/ID) landing page with Persona greetings. [COMPLETED]
- **FR1.2:** Multi-step "Triage Room" UI for incident reporting. [COMPLETED - Annotation Tool Deferred to Phase 5]
- **FR1.3:** Real-time extraction of threat identifiers (Numbers/URLs). [COMPLETED]
- **FR1.4:** Generation of signed **Digital Forensic PDF** records for police (STPL). [DEFERRED TO PHASE 5]
- **FR1.5:** Level 1 "Triage Pending" immediate isolation in Shield. [COMPLETED]

### FR2: Investigator Bounty Feed (The Verification)
- **FR2.1:** KYC-gated investigator dashboard for legal accountability. [COMPLETED]
- **FR2.2:** Reputation staking model for case claims. [COMPLETED]
- **FR2.3:** Sanitized evidence view (blurred screenshots) to protect PII. [COMPLETED]
- **FR2.4:** Human-in-the-loop consensus promotion to Level 2 (Verified). [COMPLETED]

### FR3: Intelligence & Sync
- **FR3.1:** Gemini Vision integration for high-accuracy screenshot extraction. [COMPLETED]
- **FR3.2:** Signed Snapshot API for privacy-first registry sync. [COMPLETED]
- **FR3.3:** Dual-State Shield (yellow/cautionary vs red/clinical UI). [COMPLETED]

---

## 2. Threat Lifecycle (State Machine)
1.  ?? **PENDING (Level 1):** Raw reporter data. Triggers \"Diagnosing...\" warning.
2.  ?? **STAKED:** Investigator has claimed the case and staked reputation.
3.  ?? **VERIFIED (Level 2):** Consensus reached. Triggers \"Verified Anomaly\" redaction.
4.  ? **ARCHIVED:** Threat neutralized or inactive. Moved to cold storage.

---

## 3. Tactical Roadmap (The Sprint)
- **Phase 1 (Completed):** Infrastructure, Triage UI, PDF generator.
- **Phase 2 (Completed):** Gemini Vision integration & Sanitization logic.
- **Phase 3 (Completed):** Reputation leaderboard, Quorum logic & Auth hardening.
- **Phase 4 (Current):** Satirical Demo production, finalized bug fixes (Target: May 31).
    - Rebuild KYCModal.tsx for Manual Clinical Verification.
    - Implement Triage Cards for mobile investigator dashboard.
    - Clinical Discharge UI with AI Diagnosis summary.

- **Phase 5 (Post-MVP):** Legal & Integrity Hardening.
    - Implement Real Cryptographic HMAC Signatures for Registry integrity.
    - Rebuild "Surgical Canvas" annotation tool for client-side redaction.
    - Full PrivyID/VIDA API integration for automated KYC.
