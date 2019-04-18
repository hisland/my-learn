module.exports = {
  mode: 'development',
  entry: './entry.js',
  devtool: false,
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  externals: {
    // jquery从环境中读取,
    // 会插入一个 module: `module.exports = jQuery;`
    // 内部使用还是 require('jquery');
    jquery: 'jQuery',
  },
}
