// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(async function(ctx, next) {
  console.log('href', ctx.href)
  console.log('origin', ctx.origin)
  console.log('protocol', ctx.protocol)
  console.log('host', ctx.host)
  console.log('url', ctx.url)
  console.log('path', ctx.path)
  console.log('query', ctx.query)
  console.log('querystring', ctx.querystring)

  await next()

  ctx.body = 'any path will get this: hello!'
})


app.listen(port)
console.log(`listen on: ${port}`)
