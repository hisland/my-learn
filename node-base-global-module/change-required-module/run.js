var a = require('./a');
var b = require('./b');

console.log(b); // 原始b

// 测试表示, 一个app, 大家共享cache
console.log('require.cache === a.mycache: ', require.cache === a.mycache);

delete require.cache[require.resolve('./b')];
delete require.cache[require.resolve('./a')];

var b2 = require('./b'); // 删除cache后, 得到一个新实例
var a2 = require('./a'); // 每次删除cache后, 再require, 都指向最新一次require的那个实例, 所以修改了b2

setTimeout(function() {
  console.log(b);
  console.log(b2);
  console.log(b === b2); // 显然结果一样, 但是是不同的实例
}, 300);


console.log('说明每个模块都在自己的作用域内, require得到的是它的module.exports的引用, 不管在哪里修改了里面的值,其它地方直接就使用了');
