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
}
