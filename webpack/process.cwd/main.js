// npm script启动, process.cwd 都指向 package.json 所在的目录
console.log('in main:', process.cwd());

require('./a/a');
require('./a/b/b');
