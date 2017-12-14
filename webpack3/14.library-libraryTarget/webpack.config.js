const path = require('path')

const webpack = require('webpack')

module.exports = [
  {
    entry: { bundle: './entry' },
    output: {
      path: path.join(__dirname, 'dist1'),
      filename: '[name].js', // 只运行, 结果丢弃, 作为入口使用
      chunkFilename: 'chunk-[id].[name].js',
    },
  },
  {
    entry: { bundle: './entry' },
    output: {
      path: path.join(__dirname, 'dist2'),
      library: 'hey', // global hey = xxx
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
  },
  {
    entry: { bundle: './entry' },
    output: {
      path: path.join(__dirname, 'dist4'),
      library: 'hey', // umd hey
      libraryTarget: 'umd',
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
  },
  {
    entry: { bundle: './entry' },
    output: {
      path: path.join(__dirname, 'dist3'),
      // library: 'hey', // 没有设置 name, 将 factory()结果 展开出来
      libraryTarget: 'umd',
      filename: '[name].js',
      chunkFilename: 'chunk-[id].[name].js',
    },
  },
]
