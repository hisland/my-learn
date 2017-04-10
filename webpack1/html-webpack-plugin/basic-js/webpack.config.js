var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: {
    a: './index.js',
    b: './b.js',
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin() // 没有指定模板, 使用默认的最简模板
  ]
};
module.exports = webpackConfig;
