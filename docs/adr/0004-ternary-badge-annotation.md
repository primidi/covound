# ADR 0004: Ternary Annotation Model for Voundism Shield

## Status
Accepted

## Context
The Voundism extension currently only redacts unknown/pending numbers. Verified numbers are ignored (no badge), and there is no distinction between "pending/unknown" and "confirmed scam". We need to provide clear, actionable status for all detected numbers.

## Decision
We will implement a ternary annotation model:
- **Verified (Trusted):** Number exists in `VerifiedContact`. Green badge.
- **Pending (Unknown):** Number matches regex but is in neither registry. Amber badge, strike-through.
- **Scam (Confirmed):** Number exists in `AnomalyReport` with `status: 'rejected'`. Red badge, strike-through.

The extension will sync two sets: Whitelist (`VerifiedContact`) and Blacklist (`AnomalyReport` where `status: 'rejected'`).

## Consequences
- **Positive:** Immediate visual feedback for users on trust levels. Improved user experience.
- **Negative:** Increased data payload for extension sync. Requires UI updates to the badge component.
