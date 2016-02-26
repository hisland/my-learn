// 箭头函数

(()=> console.log('some'))(); // 0个参数 必须有() 函数体是单条语句

k = [1, 2, 3, 4];

k.forEach(v => console.log(v)) // 1个参数 无()
k.forEach((v) => console.log(v)) // 1个参数 有()

k.forEach((v, i) => 
console.log(v, i)) // 2个/多个参数 必须有()

k.forEach((v, i) => { // 函数体是语句块
  console.log(i);
  console.log(v)
})

console.log((()=> {
  return 'return value';
})());

console.log((a=> {
  return a + ' return value';
})('aaa'));

