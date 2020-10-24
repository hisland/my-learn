// @ts-check
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  port: 9527,
  jsx: 'react',
  plugins: [reactPlugin],
}

module.exports = config
