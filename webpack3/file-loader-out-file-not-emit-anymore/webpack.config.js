const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    entry: {
      bundle: './aa.tt1',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tt1$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].tt2',
            },
          },
        },
        {
          test: /\.tt2$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].tt3',
            },
          },
        },
      ],
    },
    plugins: [],
  },
]
