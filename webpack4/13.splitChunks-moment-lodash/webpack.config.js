const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: false,
  entry: {
    app1: './src/entry1.js',
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
      // chunks: 'initial',
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        moment: {
          test: /\/moment\//,
          priority: -8,
          chunks: 'initial',
          name: 'moment'
        },
        lodash: {
          test: /\/lodash\//,
          priority: -8,
          chunks: 'initial',
          name: 'lodash'
        },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
      },
    },
    // splitChunks: false
  },
}
