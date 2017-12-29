// 箭头函数

k = [1, 2, 3, 4];

// 0个参数/2个/多个参数 必须有()
(() => console.log('some'))();
k.forEach((v, i) => console.log(v, i))

 // 1个参数 ()可有可无
k.forEach(v => console.log(v))
k.forEach((v) => console.log(v))

// 函数体是单条语句
k.forEach((v) => console.log(v))
// 函数体是语句块 要加 {}
k.forEach((v, i) => {
  console.log(i);
  console.log(v)
})

// => 右侧 表达式值 直接是 函数返回值
console.log((() => 3)());
console.log((() => 3 + 2)());
console.log((() => (3,4,5))()); // ,号表达式要用()包裹
// 返回值是 对象字面量 要用()包裹
console.log((() => ({'hello': 1}))());
