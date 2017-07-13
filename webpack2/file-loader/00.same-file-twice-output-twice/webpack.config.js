const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  module: {
    rules: [
      {
        test: /\.png/,
        loader: 'file-loader',
        options: {
          name: 'sub/[name].png',
        },
      },
      {
        test: /\.png/,
        loader: 'file-loader',
        options: {
          name: 'sub/[name].[hash:8].png',
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
