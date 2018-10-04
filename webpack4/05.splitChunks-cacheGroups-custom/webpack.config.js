const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: false,
  entry: {
    app1: './src/entry1.js',
    app2: './src/entry2.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: 'chunk-[id].[name].js',
  },
  module: {
    rules: [],
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vv2: {
          test: /sub2\.js/, // 注意不要太精简, 因为是全路径匹配
          // test: function(module, chunks) {
          //   console.log('vv2', module.context)
          //   return /sub2\.js/.test(module.context)
          // },

          // 不设置则集成外层设置
          chunks: 'initial',
          minSize: 10,
          name: 'vv2',
        },
        vv1: {
          test: /sub1\.js/,
          // test: function(module, chunks) {
          //   console.log('vv1', module.context)
          //   return /sub1\.js/.test(module.context)
          // },
          chunks: 'initial',
          minSize: 10,
          name: 'vv1',
        },
      },
    },
  },
}
