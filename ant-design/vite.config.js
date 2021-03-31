import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dirListPlugin from './vite2-plugin-dir-list.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
