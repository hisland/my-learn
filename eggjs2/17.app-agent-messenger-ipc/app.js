module.exports = app => {
  // 注意，只有在 egg-ready 事件拿到之后才能发送消息
  app.messenger.on('egg-ready', () => {
    console.log('egg-ready in app')
  })

  app.messenger.on('broadcast', data => {
    console.log(data)
  })

  app.messenger.on('sendToApp', data => {
    console.log(data)
  })

  app.messenger.on('sendRandom', data => {
    console.log(data)
  })
}
