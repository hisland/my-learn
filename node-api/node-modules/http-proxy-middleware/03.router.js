var proxyMiddleware = require('http-proxy-middleware')
var http = require('http')

http
  .createServer(function(req, res) {
    console.log('req 9000: ', req.url, req.headers.host)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9000\n')
    res.end()
  })
  .listen(9000)
http
  .createServer(function(req, res) {
    console.log('req 9002: ', req.url, req.headers.host)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9002\n')
    res.end()
  })
  .listen(9002)

// 下面这3行等价
var proxyInst = proxyMiddleware({
  target: 'http://localhost:9000',
  changeOrigin: true,
  router: {
    'aa:9001': 'http://bb:9000',
    'bb:9001': 'http://cc:9000',
  }
})

http
  .createServer(function(req, res) {
    console.log('req 9001: ', req.url, req.headers.host)
    proxyInst(req, res, function() {
      console.log('not proxy')
      res.end('hey')
    })
  })
  .listen(9001)
