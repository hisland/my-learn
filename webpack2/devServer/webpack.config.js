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
  devServer: {
    contentBase: __dirname,
    compress: true, // 默认是 false
    host: '0.0.0.0',
    port: 9003,
    disableHostCheck: true, // 文档中没有, 加上这个才能用本机其它地址访问,如 192.168.3.123
  }
}

// 配置仅仅是传给 webpack-dev-server, 自己不会启动 webpack-dev-server
// 需要安装 `npm i -D webpack-dev-server`, 然后 在命令行 用  webpack-dev-server 来启动
// 打包生成的文件都在内存中

// 如果你通过 Node.js API 来使用 dev-server， devServer 中的选项将被忽略。
// 将选项作为第二个参数传入： new WebpackDevServer(compiler, {...})
