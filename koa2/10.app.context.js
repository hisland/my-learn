// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

// console.log(app.context)
// app.context 是所有 ctx 的 prototype
app.context.some = 99

app.use(async function(ctx, next) {
  console.log(ctx.__proto__ === app.context)
  console.log(ctx.some)
  ctx.body = 'any path will get this: hello!'
})

app.listen(port)
console.log(`listen on: ${port}`)
