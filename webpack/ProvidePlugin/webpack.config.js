var webpack = require('webpack');

module.exports = {
  entry: {
    bundle1: './a1',
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      Vue: 'vue',
    }),
  ],
}

/*

官网说是自动注入模块, 这样就不用显示地 require('XXX') 了
可以直接使用 $ 这些 key 作为全局 对象使用 (free variable)

一直以为是表示此变量已经全局定义了...比如script引入的..

*/
