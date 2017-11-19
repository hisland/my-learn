// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

// console.log(app.context)

app.on('error', err => {
  console.log(1)
  console.log('server error', err)
})
app.on('error', (err, ctx) => {
  console.log(2)
  console.log('server error', err, ctx)
})

app.use(async function(ctx, next) {
  console.log(3+a)

  ctx.body = 'any path will get this: hello!'
})


app.listen(port)
console.log(`listen on: ${port}`)
