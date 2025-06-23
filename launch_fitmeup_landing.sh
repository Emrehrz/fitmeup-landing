#!/bin/bash

# -----------------------------
# Docker Compose Run Script
# -----------------------------
# Description: Builds and runs Docker Compose with clean restart
# Author: Halil İbrahim Hatun
# Date: $(date +%Y-%m-%d)
# -----------------------------

set -e  # Exit on any error
set -o pipefail

# Function to print info messages
log_info() {
  echo -e "\033[1;34m[INFO]\033[0m $1"
}

# Function to print error messages
log_error() {
  echo -e "\033[1;31m[ERROR]\033[0m $1"
}

# Navigate to the directory of the script
cd "$(dirname "$0")"

# Check if docker-compose.yml exists
if [[ ! -f "docker-compose.yml" ]]; then
  log_error "docker-compose.yml not found in $(pwd)"
  exit 1
fi

log_info "Starting Docker Compose with full rebuild..."
docker compose up -d --build --force-recreate

log_info "Docker containers are now running."
