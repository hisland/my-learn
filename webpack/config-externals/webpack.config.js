module.exports = {
  entry: './a.js',
  output: {
    filename: 'bundle.js'
  },
  externals: {
    jquery: 'jQuery' // jquery从环境中读取, 不用打包进入 bundle
  }
}
