module.exports = function(source, map){
  this.cacheable();
  console.log('bb loader', this.data);
  return source;
}

module.exports.pitch = function(a, b, data){
  this.cacheable();
  console.log('bb pitch');
  console.log(arguments);
  data.bb = 1;
}
