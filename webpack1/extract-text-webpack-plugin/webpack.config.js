var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 这里 [name] 是下面 entry 默认的 main
var extractCSS = new ExtractTextPlugin('[name].qq'); // main.qq
var extractLESS = new ExtractTextPlugin('[name].qq2'); // main.qq2
// console.log(ExtractTextPlugin.extract('style-loader', 'css-loader'));
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: '[name].js' // main.js
  },
  module: {
    loaders: [
      // { test: /\.css/i, loader: ExtractTextPlugin.extract('css') },
      // { test: /\.less/i, loader: ExtractTextPlugin.extract('css!less') },

      { test: /\.css/i, loader: extractCSS.extract('css') },
      { test: /\.less/i, loader: extractLESS.extract('css!less') },
    ]
  },
  plugins: [
    // new ExtractTextPlugin("styles.css"),

    extractCSS,
    extractLESS,
  ]
}
