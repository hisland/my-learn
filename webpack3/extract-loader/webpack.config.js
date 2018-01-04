const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    entry: {
      bundle: './aa.html',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            'file-loader',
            'extract-loader',
            'html-loader',
          ],
        },
      ],
    },
    plugins: [],
  },
]
