// 对象字面量, 在生成的地方, 才使用变量的值

var a = Math.random();

function bb(){
  return {
    a: a
  };
}

console.log(bb()); // a使用第一次的值
a = Math.random();
console.log(bb()); // a使用新值
a = Math.random();
console.log(bb()); // a使用新值2



var a = {};

function bb(){
  return {
    a: a
  };
}

console.log(a = bb()); //
console.log(a = bb()); //
console.log(a = bb()); // 每次生成的时候, 都指向a的最新引用

