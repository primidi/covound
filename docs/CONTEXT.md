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
A cryptographic key hosted by an **Entity** on their authoritative domain (via /.well-known/covound-key.json).

## Systems & Roles

### The Brain (Vounder & Anomaly Engine)
The administrative and hunting layer.

### The Shield (Voundism & CoVounder MCP)
The real-time protection interfaces (Browser Extension and LLM Server). Voundism uses a **Background Service Worker** to securely proxy API calls and bypass host-page Content Security Policies.

### Investigator
A verified community member who uses the **CoVounding** portal to triage reports.

### KYC (Simulated)
The current functional identity verification mockup in `KYCModal.tsx`. Pending reconstruction of the original PrivyID integration.

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
