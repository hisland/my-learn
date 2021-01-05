const connect = require('connect')

const app = connect()

app.use(function (req, res, next) {
  console.log('1', req.url)
  res.write('33')
  res.end()
})

app.listen(18081)
