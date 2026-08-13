#!/usr/bin/env bash

set -euo pipefail

if [ -f .env.local ]; then
  set -a
  source .env.local
  set +a
elif [ -f .env ]; then
  set -a
  source .env
  set +a
fi

REMOTE_HOST="153.75.235.157"
REMOTE_USER="root"
REMOTE_DIR="/var/www/ZeroJumpOne"

export REMOTE_HOST REMOTE_USER REMOTE_DIR

if [ ! -d "dist" ]; then
  echo "❌ No existe el directorio dist/. Ejecuta primero el build."
  exit 1
fi

if [ -z "${SSH_PASSWORD:-}" ]; then
  echo "❌ Falta SSH_PASSWORD en .env.local"
  exit 1
fi

python3 - <<'PY'
import os
import shlex
import sys

import pexpect

remote_user = os.environ["REMOTE_USER"]
remote_host = os.environ["REMOTE_HOST"]
remote_dir = os.environ["REMOTE_DIR"]
password = os.environ["SSH_PASSWORD"]

def run(cmd: str) -> None:
    child = pexpect.spawn(cmd, encoding="utf-8", timeout=120)
    child.logfile = None
    while True:
        idx = child.expect([
            r"(?i)are you sure you want to continue connecting",
            r"(?i)password:",
            pexpect.EOF,
            pexpect.TIMEOUT,
        ])
        if idx == 0:
            child.sendline("yes")
        elif idx == 1:
            child.sendline(password)
        elif idx == 2:
            break
        else:
            raise RuntimeError("SSH command timed out")
    if child.exitstatus not in (0, None):
        raise SystemExit(child.exitstatus)

remote = f"{remote_user}@{remote_host}"
base_ssh = "ssh -q -o LogLevel=ERROR -o StrictHostKeyChecking=accept-new -o PubkeyAuthentication=no -o PreferredAuthentications=password,keyboard-interactive"
run(f"{base_ssh} {shlex.quote(remote)} {shlex.quote(f'mkdir -p {remote_dir!r}')}")
run(f"rsync -az --delete -e {shlex.quote(base_ssh)} dist/ {shlex.quote(f'{remote}:{remote_dir}/')}")
run(f"{base_ssh} {shlex.quote(remote)} {shlex.quote('nginx -s reload')}")
PY

echo "✅ Dist desplegado en ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR} y nginx recargado"