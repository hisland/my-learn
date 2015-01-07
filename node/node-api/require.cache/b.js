var a = require('./a');
var modulePath = require.resolve('./a');

console.log('a: ', a);

a.b = 3;

console.log('a: ', a);

console.log(modulePath);

// to delete the key, require again, not the same obj
delete require.cache[modulePath];
var a1 = require('./a');

console.log('a1: ', a1);

a1.b = 30;

console.log('a1: ', a1);
console.log('a: ', a);




