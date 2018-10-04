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
    splitChunks: { // 这个其实是公共设置
      chunks: 'initial', // 默认是 async, 这个改成 入口 entry
      minSize: 3, // 3 byte
    },
  },
}
