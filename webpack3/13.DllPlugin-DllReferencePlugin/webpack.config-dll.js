const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = [
  {
    context: __dirname,
    entry: {
      entry1: ['./entry1'],
      entry2: ['./entry2'],
    },
    output: {
      path: path.join(__dirname, 'dll'),
      filename: 'dll-[name].js',
      library: 'dll_[name]_[hash]',
    },
    plugins: [
      new webpack.DllPlugin({
        context: __dirname,
        name: 'dll_[name]_[hash]', // 注意需要和  output.library 一致
        path: path.join(__dirname, 'dll/[name]-manifest.json'),
      }),
    ],
  },
]
