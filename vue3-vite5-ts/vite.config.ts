import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dirListPlugin from 'vite-plugin-vite3-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dirListPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true
  }
})
