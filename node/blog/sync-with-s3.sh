#!/bin/bash

# Sync with s3
set -euo pipefail
aws s3 sync --profile ari-sdk --delete ./out/ s3://ariito.com --exclude ".DS_Store"

echo "Synced with S3"