const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
