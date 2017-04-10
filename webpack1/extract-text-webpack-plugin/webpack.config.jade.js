var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var extractCSS = new ExtractTextPlugin('[name].css');
// var extractLESS = new ExtractTextPlugin('[name].less');
// console.log(ExtractTextPlugin.extract('style-loader', 'css-loader'));
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.css/i, loader: ExtractTextPlugin.extract('css') },
      { test: /\.jade/i, loader: ExtractTextPlugin.extract('raw!jade-html') },
      // { test: /\.jade/i, loader: 'jade-html' },
    ]
  },
  plugins: [
    new ExtractTextPlugin("aa.html"),

    // extractCSS,
    // extractLESS,
  ]
}
