# CoVound Deployment Master Guide

## 🏥 Clinical Strategy
The CoVound monorepo is deployed as a suite of stateless containers on **GCP Cloud Run**, leveraging **GCS FUSE Volume Mounts** for SQLite persistence. Deployment is fully automated via **GitHub Actions** using **Workload Identity Federation** (Zero-Trust).

---

## 📂 Architecture Map
- **Repository**: Private GitHub.
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`).
- **Registry**: GCP Artifact Registry (`covound-images`).
- **Persistence**: GCS Bucket (`gs://covound-db-bucket`) mounted at `/mnt/gcs`.
- **Secrets**: GCP Secret Manager.

---

## 🚀 Deployment Sequence

### 1. Hardening (Phase 0)
Before pushing to the private repository, perform a clinical audit:
- [ ] Run `npm run db:clean` to ensure no PII exists in the local database.
- [ ] Verify `ENCRYPTION_KEY` and `GEMINI_API_KEY` are not hardcoded.
- [ ] Check `.gitignore` for `.env` and `dev.db` exclusion.

### 2. Infrastructure Provisioning
Follow the detailed [GCP Provisioning Guide](./GCP_PROVISIONING.md) to set up the GCS bucket, Service Accounts, and WIF.

### 3. Application Configuration
Ensure your `DATABASE_URL` for production is set via Secret Manager to:
`file:/mnt/gcs/dev.db`

### 4. GitHub Action Setup
Configure the following variables in your GitHub Repository Settings (Actions Secrets):
- `GCP_PROJECT_ID`: Your Google Cloud project ID.
- `GCP_WIF_PROVIDER`: The full path to your WIF Provider (e.g., `projects/.../providers/github-provider`).
- `GCP_SA_EMAIL`: The email of your runtime Service Account.

---

## 🧪 Post-Deployment Verification
1. **Health Check**: Visit the Cloud Run URL and confirm the "Digital ER" persona loads.
2. **Persistence Audit**: 
   - Register a new investigator.
   - Force a new deployment or restart the service.
   - Verify the investigator account still exists.
3. **Shield Sync**: Ensure the Voundism extension can fetch the registry from the production `/api/snapshot` endpoint.

---
*"Accuracy is our only currency. The immunization is complete."*
