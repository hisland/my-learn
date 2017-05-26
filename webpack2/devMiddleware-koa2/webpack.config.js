const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './entry.js'
  },
  output: {
    // 注意, sub 和 下面的 dist 是映射关系,
    // /dist/main.js 才正确, /dist/sub/main.js 是不对的
    path: path.join(__dirname, 'dist/sub/'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
}
