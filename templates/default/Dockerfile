# Dependency stage
FROM node:16 AS dependencies

WORKDIR /app
COPY package*.json ./

RUN npm ci --production

# Build stage
FROM node:16 AS release

WORKDIR /app
COPY tsconfig.json ./
COPY project/ ./project

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/package*.json ./

RUN npm run build
