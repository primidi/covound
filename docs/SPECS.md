# CoVound: Technical Specs & Roadmap

## 1. Functional Requirements (MVP)

### FR1: Reporter Triage (The Intake)
- **FR1.1:** Bilingual (EN/ID) landing page with Persona greetings. [COMPLETED]
- **FR1.2:** Multi-step "Triage Room" UI for incident reporting. [COMPLETED - Annotation Tool Deferred to Phase 6]
- **FR1.3:** Real-time extraction of threat identifiers (Numbers/URLs). [COMPLETED]
- **FR1.4:** Generation of signed **Digital Forensic PDF** records for police (STPL). [DEFERRED TO PHASE 6]
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

### FR4: UX & Branding Polish (Phase 4)
- **FR4.1:** Dynamic bilingual language selection (ID/EN) stored via cookie and propagated across all endpoints. [COMPLETED]
- **FR4.2:** "0 User Target" (Ghost IGD) mission messaging configured in the centralized Persona rules and displayed on the landing page. [COMPLETED]
- **FR4.3:** Live Immunization Counter showing real-time statistics of protected connections and neutralized anomalies. [COMPLETED]
- **FR4.4:** Omnichannel "Download Firewall" CTA in the navbar and post-reporting triage room success page. [COMPLETED]

### FR5: Cloudflare & Supabase Edge Migration (Phase 5)
- **FR5.1:** Automated Edge deployment pipeline using wrangler-action on GitHub main branch pushes. [COMPLETED]
- **FR5.2:** Edge-compatible environment and dependency adapters, replacing Node-specific sharp library. [COMPLETED]
- **FR5.3:** Supabase PostgreSQL database schema synchronization and secure private/public storage buckets for PII-segregated screenshot storage. [COMPLETED]
- **FR5.4:** Read-through caching of verified contact snapshots in Cloudflare KV store to offload the database. [COMPLETED]

---

## 2. Threat Lifecycle (State Machine)
1. 🔍 **PENDING (Level 1):** Raw reporter data. Triggers "Diagnosing..." warning.
2. 🤝 **STAKED:** Investigator has claimed the case and staked reputation.
3. 🛡️ **VERIFIED (Level 2):** Consensus reached. Triggers "Verified Anomaly" redaction.
4. 📦 **ARCHIVED:** Threat neutralized or inactive. Moved to cold storage after 24 hours.

---

## 3. Tactical Roadmap (The Sprint)
- **Phase 1 (Completed):** Infrastructure, Triage UI, PDF generator.
- **Phase 2 (Completed):** Gemini Vision integration & Sanitization logic.
- **Phase 3 (Completed):** Reputation leaderboard, Quorum logic & Auth hardening.
- **Phase 4 (Completed):** Satirical Demo production, finalized bug fixes (rebuilt KYCModal, investigator dashboard mobile cards, clinical discharge UI).
- **Phase 5 (Completed):** Cloudflare & Supabase Edge Migration (Wrangler deploy, Supabase DB & Storage, Edge adapter configurations, Cloudflare KV replication).
- **Phase 6 (Post-MVP):** Legal & Integrity Hardening.
    - Implement Real Cryptographic HMAC Signatures for Registry integrity.
    - Rebuild "Surgical Canvas" annotation tool for client-side redaction.
    - Full PrivyID/VIDA API integration for automated KYC.
