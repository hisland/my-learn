import WebSocket from 'ws'

const socket = new WebSocket('ws://localhost:12321')

socket.addEventListener('open', function () {
  console.log('client open1')
})

socket.addEventListener('close', function ({ code }) {
  console.log('client close1', code)
})

socket.addEventListener('message', function ({ data, type, target }) {
  console.log('client message', data)
})

socket.addEventListener('error', function (err) {
  console.log('client error', err)
})

setTimeout(() => {
  console.log('send')
  socket.send('123')

  setTimeout(() => {
    console.log('close2221')
    socket.close()
  }, 500)
}, 300)
