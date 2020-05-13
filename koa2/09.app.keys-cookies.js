// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

// 查看 https://github.com/crypto-utils/keygrip
// keys 是 密码列表, 新->旧
app.keys = ['im secret1', 'im secret2'];

app.use(async function(ctx, next) {
  ctx.cookies.set('hey', 'bbq')
  ctx.cookies.set('hey2', 'bbq2', { signed: true, path:'/abc' })

  console.log(ctx.cookies.get('hey2'))
  ctx.body = 'any path will get this: hello!'
})

app.listen(port)
console.log(`listen on: ${port}`)
