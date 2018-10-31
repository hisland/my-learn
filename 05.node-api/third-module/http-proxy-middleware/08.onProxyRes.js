const proxyMiddleware = require('http-proxy-middleware')
const http = require('http')

http
  .createServer(function(req, res) {
    console.log('req 9010: ', req.url, req.headers)
    res.setHeader('x-back', 'foo')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9010\n')
    res.end()
  })
  .listen(9010, function() {
    console.log('listen: ', 9010)
  })

// 下面这3行等价
const proxyInst1 = proxyMiddleware('/abc', {
  target: 'http://localhost:9010',
  onProxyRes(proxyRes, req, res) {
    // proxyRes 是 proxy 收到上游传回的 http.IncomingMessage
    console.log('http.IncomingMessage: ', proxyRes instanceof http.IncomingMessage)
    console.log(proxyRes.headers)
  },
})

http
  .createServer(function(req, res) {
    console.log()
    console.log('req 9000: ', req.url)
    proxyInst1(req, res, function() {
      console.log('not proxy')
      res.end('hey')
    })
  })
  .listen(9000, function() {
    console.log('listen: ', 9000)
  })
