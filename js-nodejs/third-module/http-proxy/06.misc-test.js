var httpProxy = require('http-proxy')
var http = require('http')

var proxy = httpProxy.createProxyServer()

var aa, bb

proxy.on('error', function(){
  console.log('on error')
})

proxy.on('proxyReq', function(proxyReq, req, res, options){
  console.log(11, req === aa, res === bb)
  console.log('on proxyReq', req.headers, proxyReq.getHeaders())
  console.log('proxyReq instanceof http.ClientRequest', proxyReq instanceof http.ClientRequest)
})
proxy.on('proxyRes', function(proxyRes, req, res){
  console.log(22, req === aa, res === bb)
  console.log('on proxyRes', proxyRes.headers)
  console.log('proxyRes instanceof http.IncomingMessage', proxyRes instanceof http.IncomingMessage)
})

proxy.on('proxyReqWs', function(proxyReqWs, req, res, options){
  console.log('on proxyReqWs')
})
proxy.on('open', function(){
  console.log('on open')
})
proxy.on('close', function(){
  console.log('on close')
})

http
  .createServer(function(req, res) {

    aa = req
    bb = res

    console.log('req instanceof http.IncomingMessage', req instanceof http.IncomingMessage)
    console.log('res instanceof http.ServerResponse', res instanceof http.ServerResponse)

    req.headers.add1 = '9000'

    res.setHeader('abc9000', 456) // 客户端收到了
    res.setHeader('override', 88)

    // res.end() // 这样会导致提前结束

    let kk = proxy.web(req, res, { target: 'http://127.0.0.1:9001', changeOrigin: true })

    req.headers.add2 = '9000' // 这个不起作用, 因为 proxy 已经发出请求了

    req.on('end', function(){
      console.log('9000 req end')
    })
    res.on('finish', function(){
      console.log('9000 res finish')
    })

  })
  .listen(9000)

http
  .createServer(function(req, res) {

    console.log('9001 req', req.headers)

    res.setHeader('abc9001', 123)
    res.setHeader('override', 99)  // 我的优先级更高

    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('response from 9001\n')
    res.end()

    req.on('end', function(){
      console.log('9001 req end')
    })
    res.on('finish', function(){
      console.log('9001 res finish')
    })

  })
  .listen(9001)
