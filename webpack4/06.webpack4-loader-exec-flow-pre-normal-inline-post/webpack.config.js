const path = require('path')

module.exports = {
  context: __dirname,
  entry: './inline-loader.js!./entry.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: './pre-loader.js',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './post-loader.js',
      },
      {
        test: /\.js$/,
        loader: './normal-loader.js',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
