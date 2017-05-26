// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa');

const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const port = 9002
const router = koaRouter();


// 查看源码 https://github.com/koajs/bodyparser/blob/master/index.js
// 实测能处理 'Content-Type: application/json' 严格json
// 实测能处理 'Content-Type: application/x-www-form-urlencoded' 表单提交 a=b
// 不能处理 'Content-Type: multipart/form-data' , 需要使用 `koa-multer`
app.use(bodyParser())

app.use(async function(ctx, next) {
  console.log('start');
  await next();
});


router.get('/hello/:name', async function(ctx, next) {
  let name = ctx.params.name
  ctx.response.body = `<h1>hello: ${name}</h1>`
})
router.get('/', async function(ctx, next) {
  ctx.response.body = `<h1>Index</h1>`
})
router.post('/abc', async function(ctx, next) {
  ctx.response.body = JSON.stringify(ctx.request.body, null, ' ')
})

app.use(router.routes())


app.listen(port)
console.log(`listen on: ${port}`)
