// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(function(ctx, next) { // next 只能调用一次
  console.log(1)
  ctx.body = 'any path will get this: hello!'
  next()
})

app.use(function(ctx, next) { // 需要前置 middleware 调用 next 才能到达这一步
  console.log(2)
  ctx.body = '2' // 覆盖掉上面的 body
})

app.listen(port)
console.log(`listen on: ${port}`)
