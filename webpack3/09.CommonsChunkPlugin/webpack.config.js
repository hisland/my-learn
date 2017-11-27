const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app1: './src/entry1.js',
    app2: './src/entry2.js',
    app3: './src/entry3.js',
  },
  // entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[name].[id].js', // 默认是 [id].js, 如果没有[name], [name]值取[id]
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app1.html',
    }), // 没有指定模板, 使用默认的最简模板
    // new webpack.HotModuleReplacementPlugin(),
    // new FriendlyErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'aa',
    //   minChunks: Infinity
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'comm',
      // chunks: ['entry1', 'entry2'],
      minChunks: function(module, count) {
        // 如果模块是一个路径，而且在路径中有 "somelib" 这个名字出现，
        // 而且它还被三个不同的 chunks/入口chunk 所使用，那请将它拆分到
        // 另一个分开的 chunk 中，chunk 的 keyname 是 "my-single-lib-chunk"，而文件名是 "my-single-lib-chunk.js"
        console.log(2, module.resource, count, count === 2)
        return count>2
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'comm2',
      minChunks: function(module, count) {
        // 如果模块是一个路径，而且在路径中有 "somelib" 这个名字出现，
        // 而且它还被三个不同的 chunks/入口chunk 所使用，那请将它拆分到
        // 另一个分开的 chunk 中，chunk 的 keyname 是 "my-single-lib-chunk"，而文件名是 "my-single-lib-chunk.js"
        console.log(3, module.resource, count, count === 2)
        return count>=2
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'bb',
    //   // names: ['app1'], // 必须有一个 name 属性
    //   minChunks: Infinity
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common2', // 必须有一个 name 属性
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common3', // 必须有一个 name 属性
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest', // 必须有一个 name 属性
    //   minChunks: Infinity
    // }),
  ],
}
