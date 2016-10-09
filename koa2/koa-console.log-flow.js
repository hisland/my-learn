var Koa = require('koa');

var app = new Koa();


/*

* 运行使用 babel: babel-node koa-console.log-flow.js
* 必须使用 new Koa
* 使用 ctx 代替 this
* 使用 await next() 代替 yield next
* 使用 async/await

*/

app.use(async function(ctx, next) {
  console.log(1);
  var start = new Date;
  await next();
  var ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms')
  console.log(2);
});

app.use(async (ctx, next)=> {
  console.log(3);
  var start = new Date;
  await next();
  var ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
  console.log(4);
});

app.use(async (ctx, next)=> {
  ctx.body = "hello World!";
  console.log(5);
});


app.listen(9002);
console.log('listen on: 9002');
