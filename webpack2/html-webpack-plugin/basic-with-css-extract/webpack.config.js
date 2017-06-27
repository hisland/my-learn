const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const webpackConfig = {
  entry: {
    a: './index.js',
    b: './b.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      { test: /\.less/i, loader: ExtractTextPlugin.extract('css-loader!less-loader') },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin(),
  ]
};
module.exports = webpackConfig;
