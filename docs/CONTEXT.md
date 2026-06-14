# CoVound Context (Glossary)

## Core Entities

### Registry
The cryptographically verified source of truth containing official contact points for verified entities. Managed by **Vounder**.

### Anomaly
A piece of web data (e.g., a phone number, WhatsApp link, or URL) that claims to be an official contact for an entity but does not match the **Registry**.

### Entity
An organization (e.g., bank, fintech) whose contact information is protected and verified within the **Registry**.

### Official Contact Point
A specific communication channel (Phone, WhatsApp, URL) signed by an **Entity**'s verified key.

### Entity Public Key
A cryptographic key hosted by an **Entity** on their authoritative domain (via `/.well-known/covound-key.json`).

## Systems & Roles

### The Brain (Vounder & Anomaly Engine)
The administrative and hunting layer.

### The Shield (Voundism & CoVounder MCP)
The real-time protection interfaces (Browser Extension and LLM Server). Voundism uses a **Background Service Worker** to securely proxy API calls and bypass host-page Content Security Policies.

### Investigator
A verified community member who uses the **CoVounding** portal to triage reports.

### KYC (Simulated)
A mockup flow implemented in `KYCModal.tsx` to verify investigator identity. Simulates clinical identity matching and manual verification capability before formal integration of PrivyID/VIDA credentials.

### Persona (The Digital ER Doctor)
The behavioral framework for all interactions: calm, empathetic, authoritative.

### Quorum
The governance threshold requiring exactly 2 community investigator signatures plus 1 final admin sign-off to promote a threat to Level 2 (Verified).

### Accuracy Badge
A gamified reward earned by investigators whose verifications consistently match the final Admin-approved truth.

## Actions & States

### Triage
The process of validating a user's digital emergency and prescribing the verified truth.

### Sanitized Artifact
An evidence image that has undergone "AI Surgery"—the combination of **PII Redaction** and **Anomaly Redaction**—to permanently mask sensitive data while preserving threat metadata.

### PII Redaction (Privacy Hardening)
The visual masking of personal identifiers (faces, names, private addresses) performed manually by the reporter or automatically via AI to comply with UU PDP.

### Anomaly Redaction (Threat Neutralization)
The visual masking of any unverified contact point (phone numbers, URLs) claiming entity-level authority, performed automatically by the **Shield** or **Sanitization** engine.

### Redaction
The general clinical process of masking data. In CoVound, this is always performed as a "Surgical" act that preserves context while removing harm.

### Transient Buffer
A temporary storage layer holding raw incident evidence and threat coordinates for exactly 24 hours. This allows investigators to review reported screenshots, build consensus, and extract threat vectors before the PII-laden raw evidence is permanently expunged or archived to AES-256 encrypted Cold Storage, complying with UU PDP privacy mandates.

### Ghost IGD
A prevention-first design philosophy focused on neutralizing threat vectors at the browser/LLM layer so users never execute contact, thereby reducing victim counts to zero.

### Live Counter / Immunization Counter
A landing page metric demonstrating real-time immunizations (neutralized anomalies and secured connections) to replace traditional, alarmist "security block" branding.

### Daily Mission
Interactive micro-tasks presented to investigators to gamify incident triaging, accelerating quorum consensus on recently reported threat vectors.

### Ternary Badge
Dynamic, color-coded security badges (gray for pending/diagnosing, orange for staked, red for verified threat) injected beside numbers/links on host pages to provide contextual visual warnings.

### normalizePhone
A shared utility that cleanses and standardizes phone number formats (converting local `08...` into international `+628...`) to prevent duplicate entry registry bypasses.

### Warm-up Protocol
An automated diagnostics suite run post-deployment to verify edge routing, database transactions, and KV sync states are fully active.
