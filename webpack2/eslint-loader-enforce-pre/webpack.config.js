const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js', // 实际是下面的简写
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
