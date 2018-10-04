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
      // copy from doc: https://webpack.docschina.org/plugins/split-chunks-plugin/#optimization-splitchunks
      // chunks: 'async',
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
    },
  },
}
