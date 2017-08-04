const path = require('path')

module.exports = {
  context: __dirname,
  entry: './inline-loader!./entry.js', // 不阻止
  // entry: '!./inline-loader!./entry.js', // 阻止 normal
  // entry: '-!./inline-loader!./entry.js', // 阻止 normal,post
  // entry: '!!./inline-loader!./entry.js', // 阻止 pre,normal,post
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: './pre-loader',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './post-loader',
      },
      {
        test: /\.js$/,
        loader: './normal-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
