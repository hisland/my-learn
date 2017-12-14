const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = [{
  entry: {
    bundle: './entry',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'chunk-[id].[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'build_template.html',
      filename: 'aa.html',
      title: 'hey',
    }),
  ],
}, {
  entry: {
    bundle: './entry',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    chunkFilename: 'chunk-[id].[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
}]
