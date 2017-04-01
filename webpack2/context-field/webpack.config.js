const path = require('path');

console.log('设置 context, 随便在哪里执行, 都能正确打包, 不管 CWD 在哪里')

module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
