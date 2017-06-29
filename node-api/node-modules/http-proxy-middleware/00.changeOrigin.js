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

// 将 changeOrigin 切换, 查看,  为 true 时: headers 里面的 host 值被修改了
// var proxyInst = proxyMiddleware({target: 'http://aa:9000/abc/', changeOrigin: false}) // default
var proxyInst = proxyMiddleware({target: 'http://localhost:9000/abc/', changeOrigin: true})

http
  .createServer(function(req, res) {

    console.log('req 9001: ', req.url, req.headers.host)
    proxyInst(req, res)

  })
  .listen(9001)

