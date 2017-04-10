const path = require('path');

// externals 表示库在外部运行环境存在
// 并不会将它打入进来, 只会生成一个简单的模块, 查看 dist/bundle.js 生成的内容即明白

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    // jquery从环境中读取,
    // 会插入一个 module: `module.exports = jQuery;`
    // 内部使用还是 require('jquery');
    jquery: 'jQuery',
  }
}
