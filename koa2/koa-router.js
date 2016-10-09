var Koa = require('koa');
var koaRouter = require('koa-router');
var bodyParser = require('koa-bodyparser');

var app = new Koa();
var router = koaRouter();

// 运行使用 babel: babel-node koa-router.js

app.use(async function(ctx, next) {
  console.log('start');
  await next();
});

app.use(bodyParser())

router.get('/hello/:name', async function(ctx, next) {
  var name = ctx.params.name
  ctx.response.body = `<h1>hello: ${name}</h1>`
})
router.get('/', async function(ctx, next) {
  ctx.response.body = `<h1>Index</h1>`
})

app.use(router.routes())


app.listen(9002);
console.log('listen on: 9002');
