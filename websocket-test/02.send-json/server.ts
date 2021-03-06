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
    console.log('message from client', data.toString())
    const message = JSON.parse(data.toString())
    console.log(message.type)
  })

  setTimeout(() => {
    console.log('\nsend to client:')
    client.send(
      JSON.stringify({
        type: 'someType by server',
        value: {
          foo: 'real value by server',
        },
      })
    )
  }, 800)
})
