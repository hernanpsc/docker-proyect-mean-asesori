# Stage 1: Build the Angular app
FROM node:20.9.0-alpine AS node

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install npm@latest -g
RUN npm ci

# Copy application code and build
COPY . .
RUN npm run build

### Stage 2: Serve the app using Nginx
FROM nginx:1.25.3-alpine-slim

# Copy the Angular app's build artifacts from the previous stage
COPY --from=node /usr/src/app/dist/angular-compare /usr/share/nginx/html

# Configure Nginx
COPY config/default.conf /etc/nginx/config.d/default.conf
