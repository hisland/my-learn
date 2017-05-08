const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: './aa',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}


/**

webpack2 默认会处理 import export 语法了

只是其它的 es5, es6, es7 语法还是需要 babel 转换, 所以暂时还是使用 babel 吧  2017-04-26

 */
