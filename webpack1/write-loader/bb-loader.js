module.exports = function(source, map){
  this.cacheable();
  console.log('bb loader', this.data);
  console.log('bb loader source, map', source, map);
  return source;
}

module.exports.pitch = function(a, b, data){
  this.cacheable();
  console.log('bb pitch');
  console.log(arguments);
  data.bb = 1;
}
