# CoVound Deployment Master Guide

## 🏥 Clinical Strategy
The CoVound monorepo is deployed on an edge-first architecture using **Cloudflare Pages/Workers** for serverless scaling and **Supabase** for PostgreSQL database and asset storage. Deployment is automated via **GitHub Actions** using the Wrangler actions pipeline.

---

## 📂 Architecture Map
- **Repository**: Private GitHub.
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`).
- **Web App Hosting**: Cloudflare Pages (`covounding` and `vounder`).
- **Database**: Supabase Managed PostgreSQL.
- **Storage**: Supabase Storage Buckets (`raw-evidence` and `sanitized-evidence`).
- **Edge Cache**: Cloudflare KV (`VERIFIED_CONTACTS`).

---

## 🚀 Deployment Sequence

### 1. Pre-Deployment Configuration
Ensure that all required database tables, storage buckets, and KV namespaces have been provisioned. Refer to the [Cloudflare & Supabase Setup Guide](./CLOUDFLARE_SUPABASE_SETUP.md) for full parameters and credentials.

### 2. Database Sync
Prisma client generation and database synchronization are handled automatically in the CI/CD pipeline using the transaction credentials.
To push schema changes manually from your local development machine:
```powershell
npx prisma db push --workspace=@covound/db
```

### 3. CI/CD Deployment Secrets
Configure these variables in your GitHub Repository settings (**Settings > Secrets and variables > Actions**):
- `CLOUDFLARE_API_TOKEN`: Cloudflare deployment API token.
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare account identifier.
- `DATABASE_URL`: Direct Supabase PostgreSQL connection URL.

---

## 🔐 Secure Admin Provisioning
To maintain "Zero-Trust", the public registration route is disabled in production. Follow these steps to securely provision the first Admin account:

### 1. Configure Local Environment
Temporarily set your local environment variable or update your root `.env` to point to the production database:
```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

### 2. Run Bootstrap Script
Execute the interactive bootstrapper from your local machine:
```powershell
npx tsx apps/vounder/app/lib/bootstrap.ts
```
Follow the prompts to create the Super Admin account. Once complete, you can sign in to the production Vounder portal.

---

## 🧪 Post-Deployment Verification
1. **Health Check**: Visit your deployed Cloudflare Pages URL and confirm the "Digital ER" homepage loads.
2. **PII Isolation Audit**:
   - Report a test anomaly.
   - Verify the sanitized screenshot is publicly viewable, while the raw screenshot is secured in the private bucket.
3. **KV Sync Check**: Confirm the Voundism browser extension can fetch the cached registry snapshot from the `/api/snapshot` endpoint.

---
*"Accuracy is our only currency. The immunization is complete."*
