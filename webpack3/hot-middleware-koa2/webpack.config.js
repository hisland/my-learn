const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: ['./hotClient', './src/entry.js'],
  // entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
