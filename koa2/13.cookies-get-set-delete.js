// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(async function(ctx, next) {
  console.log(ctx.cookies.get('hey')) // get
  console.log(ctx.cookies.get('hey2'))
  ctx.cookies.set('hey') // delete
  ctx.cookies.set('hey2', 'bbq') // set

  ctx.body = 'any path will get this: hello!'
})


app.listen(port)
console.log(`listen on: ${port}`)
