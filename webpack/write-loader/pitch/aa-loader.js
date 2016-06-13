var path = require('path');
var fs = require('fs');
module.exports = function(source, map){
  this.cacheable();
  console.log('aa loader', this.data);
  return source;
}
module.exports.pitch = function(a, b, data){
  this.cacheable();
  console.log('aa pitch');
  console.log(arguments);
  data.aa = 1;
}
