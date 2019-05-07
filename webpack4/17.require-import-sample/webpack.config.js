const path = require('path')

module.exports = [
  {
    mode: 'development',
    entry: './entry-require.js',
    devtool: false,
    output: {
      path: path.join(__dirname, 'out'),
      filename: '1-require.js',
    },
  },
  {
    mode: 'development',
    entry: './entry-import.js',
    devtool: false,
    output: {
      path: path.join(__dirname, 'out'),
      filename: '2-import.js',
    },
  },
  {
    mode: 'development',
    entry: './entry-import-dynamic.js',
    devtool: false,
    output: {
      path: path.join(__dirname, 'out'),
      filename: '3-dynamic.js',
      chunkFilename: '3-dynamic-chunk.js',
    },
  },
]
