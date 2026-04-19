#!/usr/bin/env bash
set -euo pipefail

python3 -m http.server 8000 >/tmp/site-check.log 2>&1 &
SERVER_PID=$!
trap 'kill ${SERVER_PID} >/dev/null 2>&1 || true' EXIT
sleep 1

pages=(
  index.html
  farmers.html
  steps.html
  news.html
  contact.html
)

for page in "${pages[@]}"; do
  code=$(curl -s -o /tmp/page.out -w "%{http_code}" "http://127.0.0.1:8000/${page}")
  if [[ "$code" != "200" ]]; then
    echo "ERROR: ${page} returned HTTP ${code}" >&2
    exit 1
  fi

done

echo "All static pages responded with HTTP 200."
