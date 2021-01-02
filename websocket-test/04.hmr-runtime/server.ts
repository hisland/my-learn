import WebSocket from 'ws'
import http from 'http'
import fs from 'fs'
import path from 'path'

function debounce(func: Function, wait: number, fireAtHead = false) {
  let timeout: NodeJS.Timeout | null = null
  return (...args: unknown[]) => {
    const later = () => {
      timeout = null
      if (!fireAtHead) func(...args)
    }
    const needCall = fireAtHead && !timeout
    clearTimeout(timeout as NodeJS.Timeout)
    timeout = setTimeout(later, wait)
    if (needCall) func(...args)
  }
}

const clients = new Set<WebSocket>()

function BroadcastMessage(data: object) {
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data))
    } else {
      client.terminate()
      clients.delete(client)
    }
  }
}

fs.watch(
  __dirname,
  debounce(function (event: string, filename: string) {
    console.log(event, filename)
    if (event === 'change') {
      BroadcastMessage({
        type: 'update',
        url: '/' + filename,
      })
    }
  }, 50)
)

const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', function (client, req) {
  console.log('server connection', req.socket.remoteAddress)

  clients.add(client)

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
})

const httpServerInstance = http
  .createServer(function (reqMsg, resObj) {
    // console.log(reqMsg.url, reqMsg.headers)
    const url = reqMsg.url as string
    const filePath = url.replace(/\?.*$/, '')

    if (filePath.endsWith('.html')) {
      resObj.setHeader('Content-Type', 'text/html; charset=utf-8')
      const file1 = path.join(__dirname, filePath)
      send(file1)
    } else if (filePath.endsWith('.js')) {
      resObj.setHeader('Content-Type', 'text/javascript; charset=utf-8')
      const file1 = path.join(__dirname, filePath)
      send(file1)
    } else {
      const file1 = path.join(__dirname, filePath)
      send(file1)
    }

    function send(filePath: string) {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath)
        resObj.write(content)
        resObj.end()
      } else {
        resObj.write('404')
        resObj.end()
      }
    }
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
