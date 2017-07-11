const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: './aa-loader', // 这里只能是 字符串
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
