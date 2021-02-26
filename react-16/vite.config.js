import reactRefresh from '@vitejs/plugin-react-refresh'
import dirListPlugin from './vite2-plugin-dir-list.js'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  esbuild: {
    target: 'es2020',
  },
  server: {
    port: 9001,
  },
  plugins: [reactRefresh(), dirListPlugin()],
  optimizeDeps: {
    entries: [],
  },
}
