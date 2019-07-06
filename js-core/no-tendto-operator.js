// 有人说 '-->' 是 趋向于 操作
nn = 5;
while (nn --> 0) {
  console.log(nn);
}
console.log(nn);
console.log(nn);

// 实际上是 x-- 大于 y
nn = 3;
console.log(nn --> 0); // 3>0
console.log(nn);

console.log(nn-->10);// 2>10
console.log(nn);

console.log(nn-- > 0);// 1>0
console.log(nn);
console.log(nn-- > 0);// 0>0
console.log(nn);

nn = 'a';
console.log(nn --> 0);
console.log(nn);
