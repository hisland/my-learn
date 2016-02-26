// 对象字面量增强了

var a = 'some value';
var b = {
  // 方法省掉function关键字
  hello(){
    console.log('god 2!');
  },
  // 变量直接作为属性
  a,
  // 表达式结果作为属性名
  ['test'+'cc']: 'ok'
}

console.log(b);
b.hello();
console.log(b.a);
console.log(b.testcc);
