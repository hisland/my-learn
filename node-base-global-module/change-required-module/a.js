// 作为一个app的一部分, require会取得app缓存的那个引用
// 即使是自己新建的, 也会放到app缓存中, 让大家共享
var b = require('./b');

console.log('require me : a');

setTimeout(function() {
  b.bbq = 'change by a';
}, 10);

setTimeout(function() {
  b.god.halo = 'change by a2';
}, 20);

exports.mycache = require.cache;
