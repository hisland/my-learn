import WebSocket from 'ws'
import http from 'http'

const wss = new WebSocket.Server({ noServer: true })

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

const httpServerInstance = http
  .createServer(function (reqMsg, resObj) {
    console.log(reqMsg.url, reqMsg.headers)
    resObj.write('hello')
    resObj.end()
  })
  .listen(12321, function () {
    console.log('listen: ', 12321)
  })

httpServerInstance.on('upgrade', (req, socket, head) => {
  // Only handle upgrades to ESM-HMR requests, ignore others.
  console.log(req.headers)
  if (req.headers['sec-websocket-protocol'] !== 'my-protocol') {
    return
  }
  wss.handleUpgrade(req, socket, head, (client) => {
    wss.emit('connection', client, req)
  })
})
