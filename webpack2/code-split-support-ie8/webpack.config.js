const path = require('path');
const es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    bundle: './entry.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist/',
  },
  plugins: [
    new es3ifyPlugin()
  ]
}

