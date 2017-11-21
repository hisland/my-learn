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
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
