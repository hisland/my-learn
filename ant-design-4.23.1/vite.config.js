import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dirListPlugin from 'vite-plugin-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 9002,
  },
  plugins: [reactRefresh(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
