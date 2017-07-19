// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(require('koa-static')(__dirname))
app.use(async function(ctx, next) {
  console.log(1)
})

app.use(require('koa-serve-list')(__dirname))

app.use(async function(ctx, next) {
  console.log(2, '然而这里并没有执行')

})

app.listen(port)
console.log(`listen on: ${port}`)

