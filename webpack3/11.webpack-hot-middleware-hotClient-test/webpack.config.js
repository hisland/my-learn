const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')

const config = {
  context: __dirname,
  entry: {},
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: '[name]/[name].js',
    chunkFilename: '[name].[id].js', // 默认是 [id].js, 如果没有[name], [name]值取[id]
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
  ],
}

let allModules = [
  ['app1', './src/entry1.js'],
  // ['app2', './src/entry2.js'],
  // ['app3', './src/entry3.js'],
]

let runMods
if (!process.env.mod) { // 默认打包所有模块
  runMods = allModules.map(one => one[0])
} else { // 环境变量指定哪些模块, 逗号分隔
  runMods = (process.env.mod + '').split(',')
}

let runModules = allModules.filter(function(one) {
  return runMods.includes(one[0])
})

runModules.forEach(function(one) {
  config.entry[one[0]] = one[1]

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'HtmlWebpackPlugin_template.html',
      filename: `${one[0]}/index.html`,
      title: one[0],
      chunks: ['common', one[0]],
    })
  )
})

module.exports = config
