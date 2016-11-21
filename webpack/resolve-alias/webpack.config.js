module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // http://webpack.github.io/docs/configuration.html#resolve-alias
    // 模式挺多的
    // 更多的可能是把某个目录当块目录来使用
    // 比如 root, components
    alias: {
      // 'dira': 'dirb', // 注意不是等量替换 x
      // './dira': './dirb', // 注意 key 应该不能是路径, 应该是一个 module-name x
      'dira': './dirb', // require('dira/some') ==> require('./dirb/some')
    }
  }
}
