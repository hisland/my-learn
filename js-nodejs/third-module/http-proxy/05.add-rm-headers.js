var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer()


proxy.on('error', function(){
  console.log('on error')
})
proxy.on('proxyReq', function(proxyReq, req, res, options){
  console.log('on proxyReq: add header haha')
  proxyReq.setHeader('haha', 999)
})
proxy.on('proxyReqWs', function(proxyReqWs, req, res, options){
  console.log('on proxyReqWs')
})
proxy.on('proxyRes', function(proxyRes, req, res){
  console.log('on proxyRes')
  console.log('proxyRes.headers', proxyRes.headers)
  proxyRes.headers.abc = null // 删除 header
})
proxy.on('open', function(){
  console.log('on open')
})
proxy.on('close', function(){
  console.log('on close')
})

http
  .createServer(function(req, res) {

    console.log('')
    console.log('')
    console.log('')
    console.log('-----start')
    console.log('9000: req.headers', req.headers)
    let kk = proxy.web(req, res, { target: 'http://127.0.0.1:9001' })

  })
  .listen(9000)

http
  .createServer(function(req, res) {

    console.log('9001: req.headers', req.headers)
    res.setHeader('abc', 123)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9001\n')
    res.end()
    console.log('9001: res.headers', res.headers)


  })
  .listen(9001)
