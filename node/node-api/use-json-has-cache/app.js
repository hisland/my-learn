var a = require('./a')

console.log('a: ', a);

a.a = 3;

var a1 = require('./a')

console.log('a1: ', a1);


console.log('a: ', a);


console.log('即使是json也是有缓存的!');
