const path = require('path')

module.exports = {
  mode: 'development',
  entry: './entry.js',
  devtool: false,
  output: {
    path: path.join(__dirname, 'out'),
    filename: 'main.js',
    chunkFilename: 'chunk.js',
  },
}
