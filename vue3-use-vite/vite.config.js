// @ts-check
const dirListPlugin = require('./vite-plugin-dir-list.js')

const config = {
  port: 3001,
  plugins: [dirListPlugin],
}

module.exports = config
