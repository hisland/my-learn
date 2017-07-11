const path = require('path')

module.exports = {
  context: __dirname,
  entry: './dd-loader!./entry.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: './aa-loader',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './bb-loader',
      },
      {
        test: /\.js$/,
        loader: './cc-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
