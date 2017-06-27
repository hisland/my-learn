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
    new HtmlWebpackPlugin({
      title: 'aha',
      // template: './say.html', // 普通html, 直接写上
      // template: 'raw!./say.jsp', // 如果是jsp, 用raw-loader
      template: '!!raw-loader!./say.jsp', // raw-loader, 阻止经过其它所有的loader, 这个坑也是费了不少时间才发现的
      filename: './say.out.jsp'
    })
  ]
};
module.exports = webpackConfig;
