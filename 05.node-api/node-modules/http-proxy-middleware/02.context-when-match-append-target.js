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

const proxyInst = proxyMiddleware('/abc', {
  target: 'http://localhost:9010/some',
})

http
  .createServer(function(req, res) {
    console.log()
    console.log('req 9000: ', req.url, req.headers.host)
    proxyInst(req, res, function() {
      console.log('not proxy')
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.write('response from 9000, not proxy!\n')
      res.end()
    })
  })
  .listen(9000, function() {
    console.log('listen: ', 9000)
  })
