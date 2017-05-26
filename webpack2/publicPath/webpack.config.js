const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './entry.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [{
      test: /\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[hash:4].[ext]'
        }
      }]
    }]
  }
}

