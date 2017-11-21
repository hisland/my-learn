const webpack = require('webpack');
const express = require('express');

const config = require('./webpack.config.js');

const compiler = webpack(config)

const server = new express()


const hotMiddleware = require('webpack-hot-middleware')(compiler)
// compiler.plugin('compilation', function (compilation) {
//   console.log(1);
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     console.log(2, data);
//     // hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })
server.use(hotMiddleware)

server.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/dist/',
  stats: {
    colors: true,
    chunks: false
  }
}))

server.use('/', express.static('.'))

server.listen(8080)
