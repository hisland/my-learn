
var koa = require('koa');

var app = koa();


app.use(function*(next) {
  yield next;
  this.body = 4
});


app.listen(9002)
