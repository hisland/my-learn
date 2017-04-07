const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './aa',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'hey',
    // libraryTarget: 'umd', // 默认是 var
    filename: '[name].js'
  }
}
