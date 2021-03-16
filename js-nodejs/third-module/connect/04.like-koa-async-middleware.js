const connect = require('connect')

const app = connect()

app.use(Koa1LikeLayer)

app.use((req, res, next) => {
  console.log('2', req.url)
  setTimeout(() => {
    res.end('2-33\n')
    next()
  })
})

app.listen(18081)

async function Koa1LikeLayer(req, res, next) {
  await SomeMiddle1(req, res)
  next()
}
async function SomeMiddle1(req, res) {
  await SomeMiddle2(req, res)
  res.write('SomeMiddle1\n')
}
async function SomeMiddle2(req, res) {
  res.write('SomeMiddle2\n')
}
