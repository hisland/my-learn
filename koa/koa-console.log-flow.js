
var koa = require('koa');

var app = koa();

app.use(function*(next) {
  console.log(1);
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms')
  console.log(2);
});

app.use(function*(next) {
  console.log(3);
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
  console.log(4);
});

app.use(function*(next) {
  this.body = "hello World!";
  console.log(5);
});


app.listen(9002)
