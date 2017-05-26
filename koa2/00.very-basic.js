// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(function(ctx) {
  ctx.body = 'any path will get this: hello!'
})

app.listen(port)
console.log(`listen on: ${port}`)

