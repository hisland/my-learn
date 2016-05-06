var a = require('./a')

console.log('a: ', a);

a.a = 3;

var a1 = require('./a')

console.log('a1: ', a1);


console.log('a: ', a);


console.log('a, a1指向同一个对象');
