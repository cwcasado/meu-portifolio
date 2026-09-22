import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` aponta para o subcaminho do GitHub Pages:
// https://cwcasado.github.io/meu-portifolio/
export default defineConfig({
  base: '/meu-portifolio/',
  plugins: [react()],
})
