var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer()

http
  .createServer(function(req, res) {
    console.log('9000 start', req.url)

    // option 添加 changeOrigin: true 就可以了
    let kk = proxy.web(req, res, { target: 'http://baidu.com' }, function onerror(e){
      console.log(e, 'abc')
    })
    console.log(kk)

    console.log('9000 end', req.url)
  })
  .listen(9000)

http
  .createServer(function(req, res) {
    console.log('9001 start', req.url)

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9001\n')
    res.end()

    console.log('9001 end', req.url)
  })
  .listen(9001)
