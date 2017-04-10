var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  entry: {
    a: './index.js',
    b: './b.js',
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      { test: /\.less/i, loader: ExtractTextPlugin.extract('css!less') },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin(),
  ]
};
module.exports = webpackConfig;
