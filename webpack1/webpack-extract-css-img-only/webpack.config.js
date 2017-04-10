var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// var extractCSS = new ExtractTextPlugin('[name].css');
// var extractLESS = new ExtractTextPlugin('[name].less');
// console.log(ExtractTextPlugin.extract('style-loader', 'css-loader'));
module.exports = {
  entry: './css.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.css/i, loader: ExtractTextPlugin.extract('css') },
      { test: /\.less/i, loader: ExtractTextPlugin.extract('css!less') },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css"),

    // extractCSS,
    // extractLESS,
  ]
}
