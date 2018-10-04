const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: false,
  entry: {
    app1: './src/entry1.js',
    app2: './src/entry2.js',
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
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vv1: {
          test: /sub3\.js/,
          minSize: 5,
          priority: 0,
        },
        vv2: {
          test: /sub3\.js/,
          minSize: 5,
          priority: 100, // 我优先级高, 归到我这了
        },
      },
    },
  },
}
