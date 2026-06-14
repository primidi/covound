# Cloudflare & Supabase Deployment Setup Guide

## 🏥 Clinical Strategy
The CoVound platform is deployed on an edge-first architecture using **Cloudflare Pages/Workers** for serverless scaling and **Supabase** for persistent storage and database capabilities. Local development uses Node.js environment variables, while production environments leverage Cloudflare Secrets and KV bindings.

---

## 1. Supabase Provisioning (Database & Storage)

### 1.1 PostgreSQL Database
1. Create a new project in your Supabase organization (e.g., `covound-prod`).
2. Retrieve your connection strings from the project dashboard:
   * **Quick Access**: Click the green **"Connect"** button located at the top right header of the dashboard page. Under the **ORMs** or **Database Connection** tab, you will find your connection URIs.
   * **Direct Connection (Port 5432)**: Used for running local schema migrations and seeding.
     ```connection
     postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:5432/postgres
     ```
   * **Transaction Connection Pooler (Port 6543)**: Recommended for runtime connection handling in serverless environments (Cloudflare Workers/Pages) using Supavisor.
     ```connection
     postgres://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
     ```
3. To configure database parameters (such as connection pool sizes, SSL certificates, or database password resets):
   * Click on the dedicated **Database** icon in the left sidebar navigation (Database > Settings / Database > Configuration) rather than under the general Project Settings page.

### 1.2 Storage Buckets
CoVound separates public sanitized incident reports from private, unredacted original evidence to comply with UU PDP.
Navigate to **Storage** in your Supabase dashboard and create two buckets:

1. **`sanitized-evidence` (Public)**:
   * **Purpose**: Host PII-redacted evidence screenshots visible to reporters and investigators.
   * **Visibility**: Set this bucket to **Public**.
   * **Access Policy**: Allow authenticated uploads and anonymous reads.
2. **`raw-evidence` (Private)**:
   * **Purpose**: Host raw screenshots containing unredacted PII for investigator verification.
   * **Visibility**: Set this bucket to **Private**.
   * **Access Policy**: Restricted. Uploads and reads must only be performed via the Supabase Service Role client.

---

## 2. Cloudflare KV Namespace

The Voundism Browser Extension queries `/api/snapshot` directly from the edge. To avoid database overhead, verified contacts are cached in a Cloudflare KV namespace.

1. In your Cloudflare Dashboard, go to **Workers & Pages > KV > Create namespace**.
2. Name the namespace `VERIFIED_CONTACTS` and click **Create**.
3. Copy the generated **Namespace ID** (e.g., `4fa3e7...`).
4. Update `wrangler.jsonc` in both `apps/covounding/` and `apps/vounder/` to bind this namespace:
   ```json
   "kv_namespaces": [
     {
       "binding": "VERIFIED_CONTACTS",
       "id": "<YOUR_KV_NAMESPACE_ID_HERE>"
     }
   ]
   ```

---

## 3. Environment Variables & Secrets Configuration

All sensitive keys must be encrypted at rest and never checked into source control.

### 3.1 Variable Reference
| Variable Name | Environment Type | Secret/Plain | Description |
| :--- | :--- | :--- | :--- |
| `DATABASE_URL` | Cloudflare / Local | **Secret** | Connection string for Supabase PostgreSQL. (Use the port 6543 pooler URL in Cloudflare). |
| `SUPABASE_URL` | Cloudflare / Local | **Plain** | The API URL of your Supabase project (e.g., `https://db.supabase.co`). |
| `SUPABASE_SERVICE_ROLE_KEY` | Cloudflare / Local | **Secret** | The secret service role key (bypass RLS for screenshot uploads/reads). |
| `GEMINI_API_KEY` | Cloudflare / Local | **Secret** | Google Gemini API key used for image OCR and PII coordinates extraction. |
| `ENCRYPTION_KEY` | Cloudflare / Local | **Secret** | A 32-character hexadecimal key used for encrypting archived stories (AES-256). |
| `BETTER_AUTH_SECRET` | Cloudflare / Local | **Secret** | Cryptographic secret for verifying user login tokens/cookies. |
| `BETTER_AUTH_URL` | Cloudflare / Local | **Plain** | Base URL of the application (e.g., `https://covound.pages.dev`). |
| `BETTER_AUTH_TRUSTED_ORIGINS` | Cloudflare / Local | **Plain** | Comma-separated list of allowed CORS origins (e.g., chrome-extension://...). |

### 3.2 Production Cloudflare Environment Configuration
Set up secrets using the Wrangler CLI:
```powershell
# In apps/covounding
npx wrangler secret put DATABASE_URL
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
npx wrangler secret put GEMINI_API_KEY
npx wrangler secret put ENCRYPTION_KEY
npx wrangler secret put BETTER_AUTH_SECRET

# Repeat for apps/vounder
cd ../vounder
npx wrangler secret put DATABASE_URL
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
npx wrangler secret put BETTER_AUTH_SECRET
```
*Alternatively, you can set these variables in the Cloudflare Dashboard under **Workers & Pages > [Your Project] > Settings > Environment Variables**.*

### 3.3 Local Development Configuration (`.env`)
Create a `.env` file at the root of the monorepo:
```env
DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[region].pooler.supabase.com:5432/postgres"
SUPABASE_URL="https://[REF].supabase.co"
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOi..."
GEMINI_API_KEY="AIzaSy..."
ENCRYPTION_KEY="0123456789abcdef0123456789abcdef"
BETTER_AUTH_SECRET="your-auth-secret-key"
BETTER_AUTH_URL="http://localhost:5173"
BETTER_AUTH_TRUSTED_ORIGINS="http://localhost:5173,http://localhost:5174"
```

Create a `.dev.vars` file under `apps/covounding/` and `apps/vounder/` to supply secrets to Wrangler local server emulation:
```env
DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"
SUPABASE_URL="https://[REF].supabase.co"
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOi..."
GEMINI_API_KEY="AIzaSy..."
ENCRYPTION_KEY="0123456789abcdef0123456789abcdef"
BETTER_AUTH_SECRET="your-auth-secret-key"
BETTER_AUTH_URL="http://localhost:5173"
```

---

## 4. GitHub Actions CI/CD Secrets

To enable automated deployments via `.github/workflows/deploy.yml`, configure the following Repository Secrets in **GitHub > Settings > Secrets and variables > Actions**:

1. `CLOUDFLARE_API_TOKEN`: A Cloudflare API Token with `Account.Cloudflare Pages: Edit` and `User.Membership: Read` permissions.
2. `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID (available on the dashboard sidebar).
3. `DATABASE_URL`: The Supabase PostgreSQL connection string (direct connection is required during CI/CD steps to run `prisma db push` schema migration).

---

## 5. Verification Protocol

Once configured, verify the deployment by checking:
1. **Database Schema Sync**: Run `npm run db:push` locally and check if all tables map correctly in the Supabase Table Editor.
2. **Storage Check**: Report an incident with a mock screenshot image. Verify that a sanitized copy appears in `sanitized-evidence` (and is accessible publicly) and the raw copy exists in `raw-evidence`.
3. **KV Sync Check**: Ensure that adding a verified contact updates the KV namespace and `/api/snapshot` returns it directly from KV cache.

---

## 6. Infrastructure Cost & Scaling Trajectory

To maintain financial efficiency, the CoVound platform utilizes highly generous free tiers designed to sustain the platform up to the MVP/Triage launch. As traffic and stored telemetry grow, the infrastructure has a predefined scaling trajectory.

### 6.1 Cost Matrix: Tiers & Thresholds

| Service | Tier / Threshold | Included Resources | Monthly Base Price | Overage / Beyond Threshold Cost |
| :--- | :--- | :--- | :--- | :--- |
| **Cloudflare Pages & Workers** | **Free Tier** (default)<br>• *Threshold: <100k req/day* | • 100,000 requests/day<br>• Unlimited Pages bandwidth | **$0.00** | Must upgrade to Paid Tier if requests exceed 100,000/day. |
| | **Paid Tier**<br>• *Threshold: >100k req/day* | • 10M requests/month included | **$5.00** (billed annually)<br>or **$6.00** (monthly) | • $0.30 per 1M additional requests.<br>• Unlimited Pages sites & builds. |
| **Cloudflare KV Namespace** | **Free Tier** (default)<br>• *Threshold: <100k reads/day* | • 100,000 read ops/day<br>• 1,000 write/delete ops/day<br>• 1 GB storage | **$0.00** | Must upgrade to Workers Paid tier to expand KV limits. |
| | **Paid Tier** (with Workers Paid) | • 10M read ops/month<br>• 1M write/delete/list ops/month<br>• 10 GB storage | *Included in Workers Paid* | • $0.30 per 1M additional reads.<br>• $4.50 per 1M additional writes.<br>• $0.50 per GB-month additional storage. |
| **Supabase PostgreSQL** | **Free Tier** (default)<br>• *Threshold: <500 MB DB disk* | • 500 MB database space<br>• Shared CPU/RAM resources | **$0.00** | Database goes read-only if disk exceeds 500 MB. Upgrade required. |
| | **Pro Tier**<br>• *Threshold: >500 MB DB disk* | • 8 GB database space included<br>• Dedicated resource allocation | **$25.00** (per project) | • $0.125 per GB-month disk expansion.<br>• Compute upgrades optional (starts at $10/mo). |
| **Supabase Auth** | **Free Tier** (default)<br>• *Threshold: <50k MAU* | • 50,000 Monthly Active Users (MAU) | **$0.00** | Blocked new logins/registrations if limit exceeded. |
| | **Pro Tier** (with Pro DB) | • 100,000 MAU included | *Included in Pro Tier* | • $0.00325 per additional MAU. |
| **Supabase Storage** | **Free Tier** (default)<br>• *Threshold: <1 GB files / <2 GB bandwidth* | • 1 GB storage capacity<br>• 2 GB monthly data egress | **$0.00** | Uploads fail if storage exceeds 1 GB. |
| | **Pro Tier** (with Pro DB) | • 100 GB storage capacity<br>• 50 GB monthly data egress | *Included in Pro Tier* | • $0.021 per additional GB-month storage.<br>• $0.09 per additional GB data egress. |
| **Google Gemini API** | **Pay-As-You-Go**<br>• *Threshold: >15 RPM / >1,500 RPD* | • Free limits (15 RPM, 1,500 RPD) | **$0.00** | • Gemini 2.5 Flash / 3.1 Flash-Lite: ~$0.075 / 1M input tokens, ~$0.30 / 1M output tokens.<br>• Gemini 3.5 Flash: ~$0.375 / 1M input tokens, ~$1.50 / 1M output tokens. |

### 6.2 Architectural Trajectory Stages

Based on system loads, the platform will transition through these stages:

1. **Stage 1: The Incubation Stage (Free Tiers - $0/mo)**
   * **Scope**: Early launch, hackathon demos, private testing, and first 100 daily incidents.
   * **Capacity**: Up to 3,000 users/month, ~1,500 incident reports, and up to 50,000 anonymous visitors.
   * **Cost**: **$0.00 / month**.
   
2. **Stage 2: The Community Launch Stage (Mixed Paid Tiers - ~$6/mo)**
   * **Scope**: Public launch, browser extension deployed to 5,000+ users.
   * **Triggers**: Cloudflare Workers exceeds 100,000 queries per day due to live extension lookup `/api/snapshot`.
   * **Action**: Upgrade Cloudflare to **Workers Paid ($5-6/mo)** to handle up to 10M requests/month. Keep Supabase on the Free tier by utilizing the Cloudflare KV cache to offload read operations from the database.
   * **Cost**: **~$6.00 / month**.

3. **Stage 3: The Production/Growth Stage (Scale Up - ~$31/mo + overages)**
   * **Scope**: Extensive database storage requirements for historical scam incident reports, KYC images, and heavy investigative consensus.
   * **Triggers**: Database disk size approaches 500 MB (approximately 5,000 incidents with full metadata history), or Supabase Storage reaches 1 GB (roughly 500 original PII screenshots at 2MB each).
   * **Action**: Upgrade Supabase to **Pro Tier ($25/mo)**.
   * **Cost**: **~$31.00 / month** (plus any minor storage/compute overages).

4. **Stage 4: Institutional Sponsorship Stage (B2B API - Custom Enterprise)**
   * **Scope**: High-volume financial security APIs for commercial banks.
   * **Triggers**: Scale reaches millions of API calls per day, enterprise security requirements, and custom SLA agreements.
   * **Action**: Enable Supabase Point-in-time recovery (PITR) and enterprise SLA plans. Custom enterprise negotiation.

---

## 7. Context Enrichment & Developer Tooling

To allow the AI assistant to interact directly with your deployment, execute browser tests on your localhost or staging environments, and track repository events, you can install and configure the following developer tools.

### 7.1 Cloudflare Wrangler CLI Authentication
Allows the agent to run diagnostics, verify project configurations, check KV namespace bindings, and manage variables:
1. Run the login command in your local terminal:
   ```powershell
   npx wrangler login
   ```
2. A browser tab will open requesting authorization. Allow access to sync your local environment with your Cloudflare account.
3. Once authenticated, you can allow the agent to run commands like `npx wrangler pages project list` to check deployment statuses.

### 7.2 Puppeteer Browser Testing MCP Server
Allows the agent to use the browser testing devtools to open a headless browser, run integration tests, inspect DOM layouts, and troubleshoot API calls:
1. Open your Gemini/Agent configuration file (e.g. `config.json` or MCP settings config).
2. Add the Puppeteer MCP server configuration:
   ```json
   "mcpServers": {
     "puppeteer": {
       "command": "npx",
       "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
     }
   }
   ```
3. Restart your agent workspace. The agent can now use the `browser-testing-with-devtools` skill to automate tests on `http://localhost:5173/` or your staging site.

### 7.3 GitHub Integration MCP Server
Allows the agent to view commits, pull requests, actions workflow logs, and repository settings:
1. Create a GitHub **Personal Access Token (Classic)** with the following scopes:
   * `repo` (Full control of private and public repositories)
   * `workflow` (Required if you want the agent to monitor actions runs)
2. Open your Gemini/Agent configuration file (e.g. `config.json` or MCP settings config).
3. Add the GitHub MCP server configuration, replacing the token placeholder:
   ```json
   "mcpServers": {
     "github": {
       "command": "npx",
       "args": ["-y", "@modelcontextprotocol/server-github"],
       "env": {
         "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-github-personal-access-token-here>"
       }
     }
   }
   ```
4. Restart your agent workspace. The agent will now have read/write access to repository meta-information.

---
*"The edge immunization is complete. The shield is active."*


