# Dependency stage
FROM node:16 AS dependencies

WORKDIR /app
COPY package*.json ./

RUN npm ci --production

# Build stage
FROM node:16 AS release

WORKDIR /app
COPY project tsconfig.json ./
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package*.json ./

RUN npm run build
