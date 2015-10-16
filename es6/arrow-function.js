var n = 5;
while (n --> 0) {
  console.log(n);
}

console.log('------------------');

var k = [1, 2, 3, 4];
k.forEach(v => console.log(v)) //single arg

console.log('------------------');

k.forEach((v, i) => console.log(v, i)) // arg

console.log('------------------');

console.log('返回对象必须用()包起来,否则会有歧义');
