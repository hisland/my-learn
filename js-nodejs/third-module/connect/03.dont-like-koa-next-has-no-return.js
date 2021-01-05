const connect = require('connect')

const app = connect()

app.use((req, res, next) => {
  console.log('1', req.url)
  res.write('1-before\n')
  console.log(11, next()) // 不行, 后面的 promise , 返回值什么的这里拿不到
  res.write('1-after\n')
  res.end()
})

app.use((req, res, next) => {
  console.log('2', req.url)
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      res.write('2-33\n')
      resolve()
    }, 100)
  })
})

app.listen(18081)
