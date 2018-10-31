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
http
  .createServer(function(req, res) {
    console.log('req 9011: ', req.url, req.headers.host)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9011\n')
    res.end()
  })
  .listen(9011, function() {
    console.log('listen: ', 9011)
  })

// 下面这3行等价
const proxyInst1 = proxyMiddleware(
  function(pathname, req) {
    console.log(' -- try-match: ', pathname)
    return pathname.match('^/api') && req.method === 'GET'
  },
  {
    target: 'http://localhost:9010',
  }
)

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
