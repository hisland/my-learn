const path = require('path');

module.exports = {
  context: __dirname,
  entry: './entry.js', // 实际是下面的简写
  // entry: {
  //   main: './entry.js'
  // },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
