module.exports = agent => {
  agent.messenger.on('egg-ready', data => {
    console.log('egg-ready in agent')

    agent.messenger.sendToApp('sendToApp', 'agent sendToApp')
  })

  agent.messenger.on('sendToAgent', data => {
    console.log(data)
    agent.messenger.sendRandom('sendRandom', 'agent sendRandom')
  })
}
