// @ts-check
const reactPlugin = require('vite-plugin-react')
const dirListPlugin = require('./vite-plugin-dir-list.js')

const config = {
  port: 9001,
  jsx: 'react',
  plugins: [reactPlugin, dirListPlugin],
}

module.exports = config
