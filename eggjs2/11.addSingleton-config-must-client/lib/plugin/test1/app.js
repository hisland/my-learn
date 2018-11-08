module.exports = app => {
  app.addSingleton('test1', function(config, app) {
    console.log('plugin addSingleton: ', config)
    return {
      aa: 1,
    }
  })
}
