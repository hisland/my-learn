module.exports = {
  b: 1
};

// 如果直接 node b.js , require.main是自己
// 如果被require , require.main是node执行的那个file
console.log('in b: require.main === module is ', require.main === module);
console.log(require.main);
console.log(module);
