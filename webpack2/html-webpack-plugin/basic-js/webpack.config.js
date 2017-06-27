const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  plugins: [
    new HtmlWebpackPlugin() // 没有指定模板, 使用默认的最简模板
  ]
};
module.exports = webpackConfig;
