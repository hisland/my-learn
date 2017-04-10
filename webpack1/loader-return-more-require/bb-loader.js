var path = require('path');
var fs = require('fs');
module.exports = function(source, map){
  this.cacheable();
  console.log('------bb-loader');
  console.log(source)
  console.log('------bb-loader');
  return `
console.log('------bb-loader before');
${source}
console.log('------bb-loader after');
  `;
}
