import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    open: '/index.html',
    rewrite: [
      { from: /\/$/, to: '/index.html' },
      { from: /\/[^\.]+$/, to: '/index.html' },
    ],
  },
})
