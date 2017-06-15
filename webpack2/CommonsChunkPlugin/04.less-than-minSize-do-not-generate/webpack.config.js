const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    entry1: './entry1',
    entry2: './entry2',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[name].[id].js', // 默认是 [id].js, 如果没有[name], [name]值取[id]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'halo', // 必须有一个 name 属性
      minSize: 1000,
    }),
  ],
}
