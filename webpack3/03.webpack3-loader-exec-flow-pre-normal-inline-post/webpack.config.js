const path = require('path')

module.exports = {
  context: __dirname,
  entry: './entry.js', // 不阻止
  // entry: './inline-loader!./entry.js', // 不阻止
  // entry: '!./inline-loader!./entry.js', // 阻止 normal
  // entry: '-!./inline-loader!./entry.js', // 阻止 normal,pre
  // entry: '!!./inline-loader!./entry.js', // 阻止 pre,normal,post
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: './post-loader',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './pre-loader',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './normal-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}

// 对于 module.rules, 依次匹配的 loader 会
// 依次放入post, inline, normal, pre 4个数组,
// 并从右往左依次执行
