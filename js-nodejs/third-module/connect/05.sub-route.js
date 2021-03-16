const connect = require('connect')

const app = connect()

// 看源代码可以匹配 /some /some/ /some. /some/xxx /some.xxx
// 但是不能匹配 /somexxx
app.use('/some', (req, res, next) => {
  console.log('1 hasRoute:', req.url) // 这里会去掉 /some 前缀, 文档讲是 basic routing
  console.log('1 hasRoute:', req.originalUrl) // 这才是原始的 url
  res.write('1-before\n')

  next()
  res.write('1-after\n')
})

// 默认相当于 /, 匹配所有请求
app.use((req, res, next) => {
  console.log('2', req.url)
  setTimeout(() => {
    res.write('2-33\n') // 由于前面同步 end, 这里会出错
    next()
  }, 100)
})

app.use((req, res, next) => {
  res.end('done!\n')
})

app.listen(18081)
