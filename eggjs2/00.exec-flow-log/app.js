const cluster = require('cluster')
module.exports = app => {
  console.log('app start: isMaster: ', cluster.isMaster)

  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    console.log('app beforeStart')

    // 也可以通过以下方式来调用 Service
    // const ctx = app.createAnonymousContext();
    // app.cities = await ctx.service.cities.load();
  })
  app.messenger.on('egg-ready', () => {
    console.log('app ok')
  })
}
