const path = require('path');

console.log('普通对象, 最原始的配置方式')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
