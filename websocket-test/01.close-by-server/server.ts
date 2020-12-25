import WebSocket from 'ws'

const wss = new WebSocket.Server({ port: 12321 })

wss.on('connection', function (client, req) {
  console.log('server connection', req.socket.remoteAddress)

  client.on('open', function () {
    console.log('server open1')
  })

  client.on('close', function (code, reason) {
    console.log('server close', code)
  })

  client.on('message', function (data) {
    console.log('server message', data)
  })

  setTimeout(() => {
    console.log('close')
    client.close()
  }, 1000)
})
