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

# Generate Prisma Client
RUN npm run db:generate --workspace=@covound/db

# Build the application
RUN npm run build --workspace=vounder

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

# Install openssl for Prisma
RUN apk add --no-cache openssl

ENV NODE_ENV=production

# Copy built assets and necessary files
COPY --from=builder /app/apps/vounder/build ./apps/vounder/build
COPY --from=builder /app/apps/vounder/package.json ./apps/vounder/
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/packages/db/prisma/schema.prisma ./packages/db/prisma/schema.prisma
COPY --from=builder /app/scripts/prod-start.sh ./scripts/prod-start.sh

# Ensure script is executable
RUN chmod +x ./scripts/prod-start.sh

# Install production dependencies only
RUN npm ci --omit=dev

# Expose port
EXPOSE 3000

# Start command via script
ENTRYPOINT ["/bin/sh", "./scripts/prod-start.sh"]
CMD ["vounder"]
