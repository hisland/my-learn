const proxyMiddleware = require('http-proxy-middleware')
const http = require('http')

http
  .createServer(function(req, res) {
    console.log('req 9010: ', req.url, req.headers.host)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9010\n')
    res.end()
  })
  .listen(9010, function() {
    console.log('listen: ', 9010)
  })

// 下面这3行等价
const proxyInst1 = proxyMiddleware({ target: 'http://localhost:9010' })
const proxyInst2 = proxyMiddleware('/', { target: 'http://localhost:9010' })
const proxyInst3 = proxyMiddleware('**', { target: 'http://localhost:9010' })

http
  .createServer(function(req, res) {
    console.log()
    console.log('req 9000: ', req.url, req.headers.host)
    proxyInst1(req, res, function() {
      console.log('not proxy')
      res.end('hey')
    })
  })
  .listen(9000, function() {
    console.log('listen: ', 9000)
  })
