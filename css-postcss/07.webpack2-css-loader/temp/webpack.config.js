const path = require('path')

module.exports = {
  context: path.join(__dirname),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/', // 注意 开头,结尾 的 /
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            },
          },
        ],
      },
    ],
  },
}
