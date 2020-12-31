import WebSocket from 'ws'

const socket = new WebSocket('ws://localhost:12321', 'my-protocol')

socket.addEventListener('open', function ({ target }) {
  console.log('client open1')
})

socket.addEventListener('close', function ({ code, wasClean, reason, target }) {
  console.log('client close1', code)
})

socket.addEventListener('message', function ({ data, type, target }) {
  console.log('\nmessage from server:', type, data.toString())
  const message = JSON.parse(data.toString())
  console.log(message.type)
})

socket.addEventListener('error', function (err) {
  const { error, message, type, target } = err
  console.log('client error', err)
})

setTimeout(() => {
  console.log('\nsend to server:')
  socket.send(
    JSON.stringify({
      type: 'someType',
      value: {
        foo: 'real value',
      },
    })
  )
}, 300)
