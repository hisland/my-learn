import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dirListPlugin from './vite2-plugin-dir-list.js'

// https://vitejs.dev/config/
export default defineConfig({
  port: 3001,
  plugins: [vue(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
})
