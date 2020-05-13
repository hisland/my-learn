// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa')
const app = new Koa()
const port = 9002

app.use(function(ctx) {
  throw Error('god')
  ctx.body = 'any path will get this: hello!'
})

// 由于 下面并没有 app.emit('error'), 所以这里面的不会执行
app.on('error', function(err) {
  console.log(err)
})

app.context.onerror = function(err) { // 此函数处理了上面的 throw
  console.log('god', err)
  this.res.end('hey') // 这里正常响应了
}

app.listen(port)
console.log(`listen on: ${port}`)
