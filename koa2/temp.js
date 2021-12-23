const Koa = require('koa')
const KoaServeList = require('koa-serve-list') // 只提供静态文件服务, 不会列出文件列表

const app = new Koa()
const port = 9002

app.use(KoaServeList(__dirname))

app.use(function (ctx) {
  ctx.body = 'no match path will get this'
})

app.listen(port)
console.log(`listen on: ${port}`)
