var webpack = require('webpack');


var ccp = require("webpack/lib/optimize/CommonsChunkPlugin");
var ccp2 = webpack.optimize.CommonsChunkPlugin;
console.log('它们2个是相同的', ccp === ccp2);


module.exports = {
  entry: {
    bundle1: './a1',
    bundle2: './a2',
    bundle3: './a3',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('xxx'), // 公共模块打入 abc.js
    // new webpack.optimize.CommonsChunkPlugin('kk/abc.js'), // 公共模块打入 kk/abc.js
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'abc' // 注意没有.js后缀, 必填
    //   filename: 'god.js', // 默认是 '[name].js'
    // }), // 公共模块打入 abc.js
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['out/a', 'out/b']
    // }), // 打入 out/a.js out/b.js , 具体没理解
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   children: true,
    //   // filename: 'cc.js',
    //   // minSize: 100, // 默认是所有都导出, 设置module 大小, 小于此值的不导出, 看样子是字节
    //   minChunks: 2,  // 默认是所有entry都引用的模块导出为公共的, 设置为2可以在最少有2个模块引用的时候就导出到公共
    //   // chunks: ['./a1'],
    // }), // 打入 out/a.js out/b.js , 具体没理解
  ],

  // plugins: [
  //   // 设置2个实例
  //   new webpack.optimize.CommonsChunkPlugin('abc.js'),
  //   new webpack.optimize.CommonsChunkPlugin('kk/abc.js'),

  //   // 相当于
  //   // new webpack.optimize.CommonsChunkPlugin({
  //   //   names: ['abc', 'kk/abc']
  //   // }),
  // ]
}
