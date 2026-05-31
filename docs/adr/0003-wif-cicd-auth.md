# ADR 0003: Keyless CI/CD via Workload Identity Federation

## Status
Proposed

## Date
2026-05-30

## Context
To automate the deployment of the CoVound monorepo to GCP Cloud Run, we need to allow GitHub Actions to authenticate with Google Cloud. 

Traditional authentication involves creating a Service Account Key (JSON), which is then stored as a long-lived secret in GitHub. If this secret is leaked, an attacker gains persistent access to the GCP project. This violates our "Strict Zero-Trust" engineering mandate.

## Decision
We will implement **Workload Identity Federation (WIF)** for all CI/CD workflows.

1.  **Identity Pool**: Create a GCP Workload Identity Pool for GitHub.
2.  **Provider**: Create an OIDC provider within the pool targeting \	oken.actions.githubusercontent.com\.
3.  **Attribute Mapping**: Restrict access to the specific GitHub organization and repository (\google.subject\ mapping to \epo:OWNER/REPO\).
4.  **Short-lived Tokens**: GitHub Actions will exchange its OIDC token for a short-lived GCP access token during each run.

## Alternatives Considered

### Static Service Account Keys (JSON)
- **Pros**: Simple to set up.
- **Cons**: Long-lived, high risk of leakage, requires manual rotation.
- **Rejected**: Violates zero-trust security standards.

## Consequences
- **Zero-Trust**: No static secrets are stored in GitHub. Access is granular and restricted to the repository level.
- **Automation**: Seamless authentication within GitHub Actions via the \google-github-actions/auth\ action.
- **Maintenance**: No need to rotate keys.
