# Use official Node.js 20 image
FROM node:20-alpine AS builder
WORKDIR /app
# Copy root package.json and yarn.lock (if any)
COPY package.json yarn.lock* ./
# Copy backend package.json
COPY packages/backend/package.json ./packages/backend/
# Install Yarn (already present) and install dependencies
RUN npm install -g yarn && yarn install --frozen-lockfile
# Copy the rest of the source code
COPY . .
# Build the backend TypeScript code
RUN yarn workspace backend run build

FROM node:20-alpine AS runtime
WORKDIR /app
# Copy only needed files from builder
COPY --from=builder /app/packages/backend/dist ./dist
COPY --from=builder /app/packages/backend/package.json ./
# Install production dependencies only
RUN npm install -g yarn && yarn install --production --frozen-lockfile
EXPOSE 3000
CMD ["node", "dist/src/index.js"]
