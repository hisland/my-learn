import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dirListPlugin from './vite2-plugin-dir-list.js'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9004,
  },
  plugins: [react(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
