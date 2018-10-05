const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = [
  {
    mode: 'development',
    // mode: 'production',
    devtool: false,
    entry: {
      bundle: './entry.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: './dist/',
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [],
    },
    plugins: [new CleanWebpackPlugin(['dist'])],
  },
]
