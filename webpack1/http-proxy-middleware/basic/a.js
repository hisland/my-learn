var proxyMiddleware = require('http-proxy-middleware');
var express = require('express');
var app = express()

app.use(proxyMiddleware('/duty', {
  target: 'http://duty.gohighedu.com:880',
  changeOrigin: true,
}))

app.get('/', function(req, res) {
  res.end('some')
})

app.listen(4002, function (err) {
  console.log('Listening at ' + 4002 + '\n')
})
