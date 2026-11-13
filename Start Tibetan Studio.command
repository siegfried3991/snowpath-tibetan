#!/bin/zsh
cd "$(dirname "$0")"
if /usr/bin/curl -fsS http://127.0.0.1:8765/api/session -o /dev/null; then
  open 'http://127.0.0.1:8765/?lang=zh#speak'
else
  open 'http://127.0.0.1:8765/?lang=zh#speak'
  node server.mjs
fi
