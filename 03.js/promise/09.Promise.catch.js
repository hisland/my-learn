// 只接收一个函数, 处理失败的情况
// 相当于 promise().then(undefined, fn(){})

var p1 = new Promise(function(resolve, reject) {
  resolve("成功");
});

p1.then(function(value) {
  console.log(value); // "成功!"
  throw "哦，不!";
}).catch(function(e) {
  console.log(e); // "哦，不!"
});
