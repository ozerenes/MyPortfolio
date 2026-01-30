#!/usr/bin/env bash
# GitHub Pages deploy script
# Kullanım: ./deploy.sh   veya   bash deploy.sh
# Önce: npm install && npm run build
# Repo adı Portfolio değilse: GITHUB_REPOSITORY=username/repo-adı ./deploy.sh

set -e
REPO_NAME="${GITHUB_REPOSITORY##*/}"
REPO_NAME="${REPO_NAME:-Portfolio}"

echo "Building for GitHub Pages (base: /${REPO_NAME}/)..."
GITHUB_REPOSITORY="${GITHUB_REPOSITORY:-enesozer/Portfolio}" VITE_DEPLOY_TARGET=gh-pages npm run build

echo "Deploying to gh-pages branch..."
npx gh-pages -d dist

echo "Done. GitHub Pages’te yayında: https://<kullanici>.github.io/${REPO_NAME}/"
