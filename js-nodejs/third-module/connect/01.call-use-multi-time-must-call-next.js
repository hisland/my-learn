const connect = require('connect')

const app = connect()

app.use(function (req, res, next) {
  console.log('1', req.url)
  res.write('1-before\n')
  next() // 不调用则不会进入下一个 use
  res.write('1-after\n')
  res.end()
})

app.use(function (req, res, next) {
  console.log('2', req.url)
  res.write('2-33\n')
})

app.listen(18081)
