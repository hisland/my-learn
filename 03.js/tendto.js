// 有人说 '-->' 是 趋向于 操作 
n = 5;
while (n --> 0) {
  console.log(n);
}
console.log(n);
console.log(n);

// 实际上是 x-- 大于 y
n = 3;
console.log(n --> 0); // 3>0
console.log(n);

console.log(n-->10);// 2>10
console.log(n);

console.log(n-- > 0);// 1>0
console.log(n);
console.log(n-- > 0);// 0>0
console.log(n);

n = 'a';
console.log(n --> 0);
console.log(n);
