var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer()

http
  .createServer(function(req, res) {
    console.log('9000 start', req.headers)

    let kk = proxy.web(req, res, { target: 'http://127.0.0.1:9001' })

  })
  .listen(9000)

http
  .createServer(function(req, res) {
    console.log('9001 start', req.headers)

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9001\n')
    res.end()

  })
  .listen(9001)
