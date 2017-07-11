const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: './aa-loader',
      },
      {
        test: /\.js$/,
        loader: './bb-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
