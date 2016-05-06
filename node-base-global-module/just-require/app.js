require('./a'); // 加载的时候, a.js 被执行了, 所有副作用都产生了, 比如有 console.log

var a1 = require('./a'); // 因为有缓存, 所以这样就拿回了它的引用

console.log(a1);
