// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(async function(ctx, next) {
  console.log(1)
  await next() // 等待下方的 500ms 完成
  console.log(3)
  ctx.body = 'any path will get this: hello!'
})

app.use(async function(ctx, next) {
  // 需要前置 middleware 调用 next 才能到达这一步
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(2)
      ctx.body = '2'
      resolve()
    }, 500)
  })
})

app.listen(port)
console.log(`listen on: ${port}`)
