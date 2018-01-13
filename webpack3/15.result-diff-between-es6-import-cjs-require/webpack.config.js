const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    entry: {
      'bundle-use-import': './aa-use-import.js',
      'bundle-use-require': './aa-use-require.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [
      ],
    },
    plugins: [],
  },
]
