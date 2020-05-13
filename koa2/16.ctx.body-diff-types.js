// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(async function(ctx, next) {
  // ctx.body = null // 204 no content
  // ctx.body = {a:1, b:2} // application/json
  // ctx.body = new Buffer([56, 57]) // application/octet-stream
  ctx.body = 'string' // text/plain
})


app.listen(port)
console.log(`listen on: ${port}`)
