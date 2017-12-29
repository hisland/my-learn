var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer()

console.log(proxy)

http
  .createServer(function(req, res) {
    console.log('9000 start', req.url)

    let kk = proxy.web(req, res, { target: 'http://jd.com' })
    console.log(kk)

    console.log('9000 end', req.url)
  })
  .listen(9000)

