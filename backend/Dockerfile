
FROM node:22-alpine

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy backend source and Prisma configuration
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Express server port
EXPOSE 8080

# Start the backend
CMD ["node", "express.js"]
