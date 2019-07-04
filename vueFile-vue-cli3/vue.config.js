module.exports = {
  publicPath: './',
  transpileDependencies: ['sum-float'],
  configureWebpack(config) {
    // if (config.mode === 'development') {
    //   config.devtool = false
    // }

    config.devtool = false
    if (config.optimization) {
      config.optimization.minimizer = []
      // console.log(config.optimization.splitChunks)
      config.optimization.splitChunks.cacheGroups.common.chunks = 'all'
    }

    config.entry = './temp/main.js'
  },
  devServer: {
    host: 'localhost',
    port: 8180,
  },
}
