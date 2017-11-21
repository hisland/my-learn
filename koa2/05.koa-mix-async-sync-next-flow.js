// 需要使用 node v7.6.0 or higher for ES2015 and async function support

const Koa = require('koa');

const app = new Koa();
const port = 9002

// 如果全是同步的, 顺序也没区别
// 如果 同步+异步, 中间有延迟, 就有区别了

app.use(function(ctx, next) {
  console.log(1);
  let start = new Date;
  next();
  let ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms')
  console.log(2, 'done');
});

app.use(async (ctx, next) => {
  console.log(3);
  let start = new Date;
  await new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve()
    }, 500);
  })
  // 因为前面有延迟, 这后面的在 2 之后了
  next()
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  console.log(4);
});

app.use((ctx, next) => {
  ctx.body = "hello World!";
  console.log(5);
});


app.listen(port)
console.log(`listen on: ${port}`)

