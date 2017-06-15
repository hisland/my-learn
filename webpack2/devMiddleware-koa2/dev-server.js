const Koa = require('koa')
const StaticPath = require('koa-static') // 只提供静态文件服务, 不会列出文件列表

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

const app = new Koa()
const port = 9004
const compiler = webpack(webpackConfig)
const middleware = webpackDevMiddleware(compiler, {
  // 注意 开头,结尾 的 /
  // 大部分情况下和 `output.publicPath`相同
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
})

// copy from
// https://github.com/leecade/koa-webpack-middleware/blob/master/middleware/devMiddleware.js
// 正常是下面这种, 上面的链接没有考虑异步
app.use(async function(ctx, next) {
  await new Promise(function(resolve, reject) {
    middleware(
      ctx.req,
      {
        end: function(content) {
          ctx.body = content
          resolve()
        },
        setHeader: function(name, value) {
          ctx.set(name, value)
        },
      },
      resolve
    )
  })
  await next()
})

app.use(StaticPath(__dirname)) // try: http://localhost:9004/entry.js

app.listen(port, function() {
  console.log(`listen on: ${port}`)
})
