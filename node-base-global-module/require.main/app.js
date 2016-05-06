var b = require('./b');

// 如果直接 node app.js , require.main是自己
// 如果被require , require.main是node执行的那个file
console.log('in app: require.main === module is ', require.main === module);
console.log(require.main);
console.log(module);
