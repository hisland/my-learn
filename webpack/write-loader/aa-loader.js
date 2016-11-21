var path = require('path');
var fs = require('fs');
module.exports = function(source, map){
  this.cacheable();
  console.log('aa loader', this.data);
  console.log('aa loader query', this.query);
  console.log('aa loader source, map', source, map);
  return source;
}
module.exports.pitch = function(a, b, data){
  this.cacheable();
  console.log('aa pitch');
  console.log(arguments);
  data.aa = 1;
}
