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
  console.log(2, 'done'); // 这里已经完成返回了, 是 404
});

app.use(async (ctx, next) => {
  console.log(3);
  let start = new Date;
  await new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('3.1 in timeout');
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
  ctx.body = "hello World!"; // 得不到这个结果了, 因为上面已经返回了
  console.log(5);
});


app.listen(port)
console.log(`listen on: ${port}`)
