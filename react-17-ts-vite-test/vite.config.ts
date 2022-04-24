import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dirListPlugin from 'vite-plugin-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 9004,
  },
  plugins: [react(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
