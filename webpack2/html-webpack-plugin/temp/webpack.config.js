const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

const webpackConfig = {
  entry: {
    aa: './aa.js',
    bb: './bb.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'halo', // 必须有一个 name 属性
    }),
    new HtmlWebpackPlugin({
      filename: 'aa.html',
      chunks: ['halo', 'aa']
    }),
    new HtmlWebpackPlugin({
      filename: 'bb.html',
      chunks: ['halo', 'bb']
    }),
  ]
};
module.exports = webpackConfig;
