// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(async function(ctx, next) {
  console.log(ctx.onerror)
})


app.listen(port)
console.log(`listen on: ${port}`)
