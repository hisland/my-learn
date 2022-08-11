import WebSocket from 'ws'
import http from 'http'
import fs from 'fs'
import path from 'path'

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

function getFileFromNodeModule(url: string) {
  let parent = './',
    count = 0
  while (count < 3) {
    const file1 = path.join(__dirname, parent, url)
    if (fs.existsSync(file1)) {
      return file1
    } else {
      count += 1
      parent += '../'
    }
  }
  throw Error('找不到模块')
}

const httpServerInstance = http
  .createServer(function (reqMsg, resObj) {
    // console.log(reqMsg.url, reqMsg.headers)
    const url = reqMsg.url as string

    if (url.endsWith('.html')) {
      resObj.setHeader('Content-Type', 'text/html; charset=utf-8')
      const file1 = path.join(__dirname, url)
      send(file1)
    } else if (url.endsWith('.js')) {
      resObj.setHeader('Content-Type', 'text/javascript; charset=utf-8')
      const file1 = path.join(__dirname, url)
      const isModule = /^node_modules/.test(url)
      if (isModule) {
        const moduleFile = getFileFromNodeModule(
          url.replace(/^node_modules\//, '')
        )
        send(moduleFile)
      } else if (fs.existsSync(file1)) {
        let content = fs.readFileSync(file1).toString()
        content.replace(/ from (['"])(.+)\1/, function (mm, aa, bb) {
          console.log(mm, aa, bb)
          return mm
        })
      } else {
      }

      if (isModule) {
        console.log(11, file1)
        content.replace(/ from (['"])(.+)\1/, function (mm, aa, bb) {
          console.log(mm, aa, bb)
          return mm
        })
      }
      resObj.write(content)
      resObj.end()
    } else {
      const file1 = path.join(__dirname, url)
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
