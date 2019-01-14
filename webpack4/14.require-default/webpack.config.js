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
    // chunkFilename: 'chunk-[id].[name]-[contenthash:6].js',
    chunkFilename: '[name]-[contenthash].js',
    publicPath: 'dist/',
  },
  module: {
    rules: [],
  },
  plugins: [],
  // optimization: {
  //   splitChunks: {
  //     minSize: 0,
  //     chunks: 'all',
  //     cacheGroups: {
  //       sub1: {
  //         name: 'sub1',
  //         test: /\/sub1\//,
  //         priority: -10,
  //       },
  //       sub2: {
  //         name: 'sub2',
  //         test: /\/sub2\//,
  //         priority: -10,
  //       },
  //     },
  //   },
  // },
}
