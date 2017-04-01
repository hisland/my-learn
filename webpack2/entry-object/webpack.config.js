const path = require('path');

module.exports = {
  entry: {
    bundleaa: './aa',
    bundlebb: './bb',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}
