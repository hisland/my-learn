// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

// ctx.state 是跨 中间件 的 状态命名空间

app.use(async function(ctx, next) {
  ctx.state.hey = 'haha'

  await next()

  console.log(11, ctx.state)

  ctx.body = 'any path will get this: hello!'
})

app.use(async function(ctx, next) {
  console.log(22, ctx.state)

  ctx.state.bbq = 'mike'

  ctx.body = '2'
})


app.listen(port)
console.log(`listen on: ${port}`)
