# Stage 1: Build and serve the Vue app
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build
# Install a lightweight server to serve the static files
RUN npm install -g serve
# Serve the built app on port 8080
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "8080"]
