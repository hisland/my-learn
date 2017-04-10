var path = require('path');
var fs = require('fs');
module.exports = function(source, map){
  this.cacheable();
  console.log('------aa-loader');
  console.log(source)
  console.log('------aa-loader');
  return `
console.log('------aa-loader before');
require('./aa-loader!./dd'); // 注入更多的 require, 会递归解析
// require('./aa-loader!./dd'); // 自己使用自己, 不会无限递归, 只是递归里面会拿到还没初始化的空对象
${source}
console.log('------aa-loader after');
  `;
}
