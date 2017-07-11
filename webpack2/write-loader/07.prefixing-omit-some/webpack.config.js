const path = require('path')

module.exports = {
  context: __dirname,
  // entry: './dd-loader!./entry.js', // 不阻止
  // entry: '!./dd-loader!./entry.js', // 阻止 normal
  entry: '-!./dd-loader!./entry.js', // 阻止 normal,post
  // entry: '!!./dd-loader!./entry.js', // 阻止 pre,normal,post
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: './aa-loader',
      },
      {
        test: /\.js$/,
        enforce: 'post',
        loader: './bb-loader',
      },
      {
        test: /\.js$/,
        loader: './cc-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
