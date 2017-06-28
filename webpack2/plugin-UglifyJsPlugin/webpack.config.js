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
  devtool: '#source-map',
  plugins: [
    // 只支持 es5, es6 要使用 uglify-es
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true // 配合上面的 devtool 才能生成文件
    }),
  ],
}

