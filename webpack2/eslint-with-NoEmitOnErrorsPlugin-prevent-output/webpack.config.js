const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    entry: './entry.js',
    aa: './aa.js',
    bb: './bb.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
