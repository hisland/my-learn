// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa');

const app = new Koa();
const port = 9002

app.use(async function(ctx, next) {
  console.log(1);
  let start = new Date;
  await next();
  let ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms')
  console.log(2);
});

app.use(async(ctx, next) => {
  console.log(3);
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  console.log(4);
});

app.use(async(ctx, next) => {
  ctx.body = "hello World!";
  console.log(5);
});


app.listen(port)
console.log(`listen on: ${port}`)

