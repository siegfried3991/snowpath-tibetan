#!/bin/zsh
cd "$(dirname "$0")"
if /usr/bin/curl -fsS http://127.0.0.1:8765/api/session -o /dev/null; then
  open 'http://127.0.0.1:8765/?lang=zh#speak'
else
  node server.mjs &
  studio_pid=$!
  trap 'kill "$studio_pid" 2>/dev/null' EXIT INT TERM
  for attempt in {1..40}; do
    if /usr/bin/curl -fsS http://127.0.0.1:8765/api/session -o /dev/null 2>/dev/null; then
      open 'http://127.0.0.1:8765/?lang=zh#speak'
      break
    fi
    sleep 0.2
  done
  wait "$studio_pid"
fi
