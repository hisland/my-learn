const connect = require('connect')

const app = connect()

app.use((req, res, next) => {
  console.log('1', req.url)
  res.write('1-before\n')

  // 不行, 后面的 promise , 返回值什么的这里拿不到
  // next 是内部函数, 只能同步调用, 不是后面的 handler, 不能等待
  console.log(11, next())
  res.write('1-after\n')
  res.end()
})

app.use((req, res, next) => {
  console.log('2', req.url)
  setTimeout(() => {
    res.write('2-33\n') // 由于前面同步 end, 这里会出错
    next()
  }, 100)
})

app.listen(18081)
