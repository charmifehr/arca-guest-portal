#!/bin/bash
# Start the Arca Guest Portal locally
set -e
cd "$(dirname "$0")/.."

if ! command -v npm >/dev/null 2>&1; then
  echo ""
  echo "Node.js is not installed."
  echo "Install it from https://nodejs.org (LTS), then run this script again."
  echo ""
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

if [ ! -f .env.local ]; then
  cp .env.example .env.local
  echo "Created .env.local — update admin password before deploying."
fi

# Stop stale dev servers and clear corrupted build cache
if command -v lsof >/dev/null 2>&1; then
  for port in 3000 3001; do
    pids=$(lsof -ti:"$port" 2>/dev/null || true)
    if [ -n "$pids" ]; then
      echo "Stopping process on port $port..."
      kill -9 $pids 2>/dev/null || true
    fi
  done
fi

if [ -d .next ]; then
  echo "Clearing .next cache..."
  rm -rf .next
fi

echo ""
echo "Starting dev server at http://localhost:3000"
echo "Admin panel: http://localhost:3000/admin"
echo "Press Ctrl+C to stop."
echo ""

npm run dev
