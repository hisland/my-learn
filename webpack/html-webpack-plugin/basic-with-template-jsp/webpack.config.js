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
    new HtmlWebpackPlugin({
      title: 'aha',
      // template: './say.html', // 普通html, 直接写上
      template: 'raw!./say.jsp', // 如果是jsp, 用raw-loader
      filename: '../say2.jsp'
    })
  ]
};
module.exports = webpackConfig;
