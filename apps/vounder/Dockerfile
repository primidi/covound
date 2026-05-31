# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy root manifest and lockfile
COPY package.json package-lock.json ./

# Copy all workspace manifests
COPY apps/covounding/package.json ./apps/covounding/
COPY apps/vounder/package.json ./apps/vounder/
COPY apps/voundism/package.json ./apps/voundism/
COPY apps/anomaly-engine/package.json ./apps/anomaly-engine/
COPY apps/co-vounder/package.json ./apps/co-vounder/
COPY packages/db/package.json ./packages/db/
COPY packages/logic/package.json ./packages/logic/
COPY packages/ui/package.json ./packages/ui/

# Install all dependencies (development + production)
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Install openssl for Prisma generation on Alpine
RUN apk add --no-cache openssl

# Copy dependencies and source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set database URL for build-time push
ENV DATABASE_URL="file:/app/dev.db"

# Generate Prisma Client
RUN DATABASE_URL="file:/app/dev.db" npm run db:generate --workspace=@covound/db

# Bake database into the image
RUN DATABASE_URL="file:/app/dev.db" npx prisma db push --schema=./packages/db/prisma/schema.prisma --accept-data-loss

# Build the application
RUN npm run build --workspace=vounder

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV DATABASE_URL="file:/app/dev.db"
ENV HOST=0.0.0.0
ENV PORT=8080

# FOOLPROOF FIX: Copy the entire working builder directory
COPY --from=builder /app /app

# Expose port
EXPOSE 8080

# Start command directly (no startup script)
CMD ["npm", "run", "start", "--workspace=vounder"]
