# ADR 0002: Persistent SQLite via Google Cloud Storage (GCS) FUSE

## Status
Proposed

## Date
2026-05-30

## Context
The CoVound monorepo requires a persistent database for the MVP launch on GCP Cloud Run. While Cloud Run is inherently stateless, the "Digital ER" mandate requires that reported incidents, investigator signatures, and registry snapshots persist across container restarts and scaling events. 

Moving to a managed database like Cloud SQL (PostgreSQL) is the long-term goal but adds immediate cost and configuration complexity. SQLite is our current "Source of Truth" but storing it within the container's ephemeral filesystem would result in total data loss upon scaling to zero or redeployment.

## Decision
We will use **SQLite with persistence enabled via Cloud Storage FUSE volume mounts**.

1.  **GCS Bucket**: A dedicated bucket (\gs://covound-db-bucket\) will hold the \dev.db\ file.
2.  **Volume Mount**: The bucket will be mounted to \/mnt/gcs/\ in the Cloud Run containers.
3.  **Concurrency Limit**: To prevent database corruption (as SQLite does not support concurrent writes from multiple processes/containers on FUSE), we will enforce a strict **\max-scale: 1\** and **\max-concurrency: 80\** (default) on the Cloud Run service.

## Alternatives Considered

### Cloud SQL (PostgreSQL)
- **Pros**: Production-grade, high concurrency, automatic backups.
- **Cons**: Significantly higher cost for MVP, requires VPC connector or Auth Proxy, requires application-level logic changes to move away from Better-SQLite3.
- **Rejected**: Overkill for the initial demo and rapid MVP cycle.

### Local Ephemeral Storage
- **Pros**: Zero configuration.
- **Cons**: Data loss on every restart.
- **Rejected**: Incompatible with the "Digital ER" mission.

## Consequences
- **Persistence**: Data survives container restarts and new deployments.
- **Scaling Restriction**: The service cannot scale beyond 1 instance. This is acceptable for the MVP traffic volume.
- **Performance**: Disk I/O to GCS is slower than local disk; however, SQLite's read-heavy nature for the Registry makes this negligible for the Shield's performance.
- **Configuration**: The \DATABASE_URL\ must be set to \ile:/mnt/gcs/dev.db\ in production.
