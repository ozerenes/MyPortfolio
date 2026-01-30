import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: base = /RepoName/ (örn. /MyPortfolio/); Vercel/local için '/'
const viteBase = process.env.VITE_BASE_PATH // örn. /MyPortfolio/
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio'
const isGhPages =
  (process.env.VITE_BASE_PATH || process.env.GITHUB_REPOSITORY) &&
  process.env.VITE_DEPLOY_TARGET === 'gh-pages'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }
  if (command === 'build' && isGhPages) {
    config.base = viteBase && viteBase.startsWith('/') ? viteBase : `/${repoName}/`
  }
  return config
})
