import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: GITHUB_REPOSITORY set ise base = '/RepoName/'; Vercel/local için '/'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfolio'
const isGhPages = process.env.GITHUB_REPOSITORY && process.env.VITE_DEPLOY_TARGET === 'gh-pages'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }
  if (command === 'build' && isGhPages) {
    config.base = `/${repoName}/`
  }
  return config
})
