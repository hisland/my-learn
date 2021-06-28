import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dirListPlugin from './vite2-plugin-dir-list.js'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9002,
  },
  plugins: [reactRefresh(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
