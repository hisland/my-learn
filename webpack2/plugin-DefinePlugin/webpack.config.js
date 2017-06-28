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
    new webpack.DefinePlugin({
      'some': 123,
      'some.value': true,
      'some.false': false,
      'some.reg': /hey-bbq/gi,
      'some.str1': '"abc"', //注意引号
      'some.str2': JSON.stringify('abc'), //和上面等价
      'some.fn': function(halo){
        console.log(halo)
      }, //和上面等价
    }),
  ],
}


/*

* 对 key 进行 全量替换
* 所以如果是字符串, 注意引号
* 感觉就像 宏展开

* 注意和 ProvidePlugin 的区别,
  * 本插件是 等量替换
  * ProvidePlugin 是注入模块

*/
