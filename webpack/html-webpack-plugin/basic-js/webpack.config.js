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
  plugins: [new HtmlWebpackPlugin()]
};
module.exports = webpackConfig;
