const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = [
  {
    entry: {
      bundle: './entry',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
            },
          },
        },
      ],
    },
    plugins: [],
  },
]
