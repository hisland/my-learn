const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    main: './aa',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.PP': './bb',
    }),
  ],
}


/*

实际并不会生成 window.PP = xxx 的代码,
而是将源码使用到 window.PP 的地方转换成了一个变量
打包后, 查看 dist/main.js 了解

*/
