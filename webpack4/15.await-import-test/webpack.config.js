const path = require('path')
const webpack = require('webpack')

module.exports = {
  // mode: 'production',
  mode: 'development',
  context: __dirname,
  devtool: false,
  entry: {
    app1: './src/entry1.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'chunk-[id].[name]-[contenthash:6].js',
    publicPath: 'dist/',
  },
  module: {
    rules: [],
  },
  plugins: [],
}
