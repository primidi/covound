# GCP Infrastructure Provisioning Guide (Clinical Backup)

## Overview
This guide provides the exact `gcloud` command sequence to provision a Zero-Trust, persistent environment for the CoVound monorepo on GCP Cloud Run using Cloud SQL (PostgreSQL) instead of legacy SQLite/GCS FUSE.

---

## 1. Project Initialization
```bash
# Set your project ID
export PROJECT_ID="your-project-id"
gcloud config set project $PROJECT_ID

# Enable required services
gcloud services enable \
    run.googleapis.com \
    containerregistry.googleapis.com \
    artifactregistry.googleapis.com \
    secretmanager.googleapis.com \
    storage.googleapis.com \
    sqladmin.googleapis.com \
    vpcaccess.googleapis.com \
    iam.googleapis.com
```

---

## 2. Storage & Database Provisioning

### 2.1 Artifact Registry (Docker Images)
```bash
gcloud artifacts repositories create covound-images \
    --repository-format=docker \
    --location=us-central1 \
    --description="CoVound Monorepo Images"
```

### 2.2 Cloud SQL (PostgreSQL 17)
```bash
# Create PostgreSQL instance (micro tier for cost-efficiency)
gcloud sql instances create covound-postgres \
    --database-version=POSTGRES_17 \
    --tier=db-f1-micro \
    --region=us-central1

# Create the database within the instance
gcloud sql databases create covound \
    --instance=covound-postgres

# Set the password for the database administrator
gcloud sql users set-password postgres \
    --instance=covound-postgres \
    --password="your-postgres-password"
```

---

## 3. Security & IAM

### 3.1 Create Dedicated Service Account
```bash
gcloud iam service-accounts create covound-runtime-sa \
    --display-name="CoVound Runtime Service Account"

export SA_EMAIL="covound-runtime-sa@$PROJECT_ID.iam.gserviceaccount.com"
```

### 3.2 Grant Least-Privilege Roles
```bash
# Grant access to Cloud SQL (Database client role)
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SA_EMAIL" \
    --role="roles/cloudsql.client"

# Grant access to Secret Manager
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SA_EMAIL" \
    --role="roles/secretmanager.secretAccessor"
```

---

## 4. Workload Identity Federation (GitHub)

### 4.1 Create Pool and Provider
```bash
gcloud iam workload-identity-pools create "github-pool" \
    --location="global" \
    --display-name="GitHub Pool"

export POOL_ID=$(gcloud iam workload-identity-pools describe "github-pool" \
    --location="global" --format="value(name)")

gcloud iam workload-identity-pools providers create-oidc "github-provider" \
    --location="global" \
    --workload-identity-pool="github-pool" \
    --display-name="GitHub Provider" \
    --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository" \
    --issuer-uri="https://token.actions.githubusercontent.com"
```

### 4.2 Bind Service Account to GitHub Repo
```bash
# Replace OWNER/REPO with your private repo path
gcloud iam service-accounts add-iam-policy-binding $SA_EMAIL \
    --role="roles/iam.workloadIdentityUser" \
    --member="principalSet://iam.googleapis.com/${POOL_ID}/attribute.repository/OWNER/REPO"
```

---

## 5. Secret Manager Setup
Create and populate the required secrets:
```bash
echo -n "postgresql://postgres:your-postgres-password@/covound?host=/cloudsql/$PROJECT_ID:us-central1:covound-postgres" | gcloud secrets create DATABASE_URL --data-file=-
echo -n "your_secret_value" | gcloud secrets create BETTER_AUTH_SECRET --data-file=-
echo -n "your_gemini_key" | gcloud secrets create GEMINI_API_KEY --data-file=-
echo -n "32_char_hex_key" | gcloud secrets create ENCRYPTION_KEY --data-file=-
```

---
*"The backup infrastructure blueprints are updated. Ready."*
