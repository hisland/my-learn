// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const StaticPath = require('koa-static') // 只提供静态文件服务, 不会列出文件列表

const app = new Koa()
const port = 9002

app.use(StaticPath(__dirname)) // try: http://localhost:9002/package.json

app.use(function(ctx) {
  ctx.body = 'no match path will get this'
})

app.listen(port)
console.log(`listen on: ${port}`)

