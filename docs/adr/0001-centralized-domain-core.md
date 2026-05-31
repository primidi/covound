# ADR 0001: Centralized Domain & Cryptographic Core

## Status
Accepted

## Context
The CoVound monorepo consists of multiple applications that must all adhere to a "Strict Zero-Trust" model and use a consistent "Digital ER Doctor" persona:
- **Vounder:** Admin Registry & API.
- **CoVounding:** Public Bounty Board & Reporter Portal.
- **Voundism:** Real-time Browser Shield.
- **CoVounder MCP:** LLM Source of Truth.
- **Anomaly Engine:** Gemini-powered Hunter.

Previously, domain logic, cryptographic signing, and persona-driven strings were duplicated or inconsistently implemented. Inconsistency in security logic is a direct threat to the project's mission.

## Decision
We have centralized all shared domain logic, cryptographic utilities, and persona-driven content into a dedicated package within the monorepo: `packages/logic`.

This package contains:
1.  **Zod Schemas:** For `Entity`, `OfficialContactPoint`, and `Anomaly` objects, used for validation at every boundary.
2.  **Cryptographic Utilities:** Implementation of the Domain-Anchored PKI (signature verification).
3.  **Persona Library:** A canonical set of "Dr. Gia" strings and templates for the **Diagnosis** phase of triage.
4.  **Security Constants:** Shared timeouts, rate limits, and zero-trust thresholds.

## Consequences
- **Positive:** Guaranteed consistency in security and persona across all user touchpoints. Easier to update the verification protocol in one place.
- **Negative:** Adds a dependency on the shared package for all apps.
- **Neutral:** Shifts complexity from individual apps to a shared library.
