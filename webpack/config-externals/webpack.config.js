module.exports = {
  entry: './a.js',
  output: {
    filename: 'bundle.js'
  },
  externals: {
    // jquery从环境中读取,
    // 会插入一个 module: `module.exports = jQuery;`
    // 内部使用还是 require('jquery');
    jquery: 'jQuery'
  }
}
