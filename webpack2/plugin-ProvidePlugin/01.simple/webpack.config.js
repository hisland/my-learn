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
      some: './bb', // 使用到 some 变量的, 会自动注入对应的模块, 修改cc.js, 然后查看 dist/main.js
    }),
  ],
}


/*

官网说是自动注入模块, 这样就不用显示地 require('XXX') 了

通过结果发现, 生成的并非全局变量, 而是 把 module 包裹了一层



*/
