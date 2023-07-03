import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VitePluginVite3DirList from 'vite-plugin-vite3-dir-list'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 9007,
  },
  plugins: [VitePluginVite3DirList(), vue(), vueJsx()],
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
})
