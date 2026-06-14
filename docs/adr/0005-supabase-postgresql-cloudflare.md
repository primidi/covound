# ADR 0005: Migrating to Supabase PostgreSQL & Cloudflare Pages/Workers

## Status
Accepted

## Date
2026-06-13

## Context
During Phase 2 implementation, the team pivoted away from the GCP/SQLite model. 
1. **Concurrency and Scale Restrictions**: Ephemeral SQLite persistence mounted via GCS FUSE (as defined in [ADR 0002](0002-persistent-sqlite-gcs.md)) required a strict `max-scale: 1` instance limit on Cloud Run to prevent file locking and database corruption. This limit severely restricts load capacity.
2. **Edge Compatibility**: Running on the edge via Cloudflare Pages and Workers significantly improves latency, reduces costs, and provides global availability. However, Cloudflare's runtime does not support native C++ binaries (e.g., SQLite drivers, local filesystem writes) or GCS FUSE volume mounts.
3. **Database Architecture**: To scale to thousands of active browser extension users and investigators, CoVound requires a robust PostgreSQL database with serverless connection pooling capabilities.

## Decision
We will migrate the database and storage to **Supabase** and deploy the applications using **Cloudflare Pages/Workers**.

1. **Database Migration**: Change the Prisma datasource provider to `postgresql` and sync the schema to a managed **Supabase PostgreSQL** instance.
2. **Framework Adapter**: Implement the `@react-router/cloudflare` build adapter for the `covounding` and `vounder` Remix applications, deploying via the `cloudflare/wrangler-action` workflow.
3. **Native Dependency Mitigation**: Replace the native C++ `sharp` library in `redact.server.ts` with a lightweight, edge-compatible bypass that logs PII coordinates, relying on client-side canvas logic for the actual visual redaction.
4. **Cloud Storage**: Store original (PII-laden) and sanitized evidence screenshots in Supabase Storage buckets (`raw-evidence` and `sanitized-evidence` respectively), routing uploads via the Supabase Service Role client.
5. **Edge-First Cache**: Use **Cloudflare KV Namespace (`VERIFIED_CONTACTS`)** to cache verified contact snapshots. The extension API endpoint `/api/snapshot` will query this KV cache directly to bypass database lookups, falling back to Supabase and auto-rehydrating KV on cache misses.
6. **Local Development**: Utilize a local **PostgreSQL 17** container via `docker-compose.yml` for local sandbox database instances.

## Alternatives Considered

### Google Cloud Run + Cloud SQL (PostgreSQL)
- **Pros**: Retains GCP stack consistency.
- **Cons**: High baseline costs ($10+/mo for lowest-tier Cloud SQL instance plus compute costs), requires Workload Identity Federation and VPC connector configuration, lacks the native Edge caching speed of Cloudflare KV.
- **Rejected**: Too expensive and complex for the current stage compared to Supabase's generous free tier and Cloudflare's edge capabilities.

## Consequences
- **Unlimited Scale**: The application can scale to millions of requests without concurrency/instance limits.
- **Database Pooling**: Runtime queries in Cloudflare must use the Supabase Transaction Pooler (port 6543) to prevent connection starvation.
- **Developer Requirements**: Developers must run `docker-compose up -d` locally to run PostgreSQL, and run `npm run db:reset` to seed test data.
- **Secret Management**: Environment variables (`DATABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY`, `BETTER_AUTH_SECRET`, `ENCRYPTION_KEY`) must be configured as Cloudflare Page Secrets and GitHub repository secrets.
