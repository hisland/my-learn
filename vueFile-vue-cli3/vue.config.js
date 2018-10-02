module.exports = {
  baseUrl: './',
  configureWebpack(config) {
    // if (config.mode === 'development') {
    //   config.devtool = false
    // }

    config.devtool = false
    config.optimization.minimizer = []

    config.entry = './main.js'
  },
}
