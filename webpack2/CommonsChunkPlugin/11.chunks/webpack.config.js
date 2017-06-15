const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    entry1: './entry1',
    entry2: './entry2',
    entry3: './entry3',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[name].[id].js', // 默认是 [id].js, 如果没有[name], [name]值取[id]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      // 指定1个或多个 entry-chunk 进行提取 common-chunk,
      // 不在列表中的 entry-chunk 不变
      // 不指定 chunks, 表示提取所有的 entry-chunk
      chunks: ['entry1', 'entry3'],
    }),
  ],
}
