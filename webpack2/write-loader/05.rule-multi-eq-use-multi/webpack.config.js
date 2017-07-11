const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  module: {
    rules: [
      // 下面3个相当于 这1个
      // {
      //   test: /\.js$/,
      //   use: ['./aa-loader', './bb-loader', './cc-loader'],
      // },
      {
        test: /\.js$/,
        loader: './aa-loader',
      },
      {
        test: /\.js$/,
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
