const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    mode: 'development',
    // mode: 'production',
    devtool: false,
    entry: {
      bundle: './entry',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [],
    },
    plugins: [],
  },
]
