var n = 5;
while (n --> 0) {
  console.log(n);
}

console.log('------------------');

var k = [1, 2, 3, 4];
k.forEach(v => console.log(v)) //single arg

console.log('------------------');

k.forEach((v, i) => console.log(v, i)) // arg


