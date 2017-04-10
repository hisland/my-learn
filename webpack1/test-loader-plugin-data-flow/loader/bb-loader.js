module.exports = function(source, map){
  // this.cacheable(); // 一个不能 cache, 整条链都不能cache
  console.log('bb loader', this.data);
  console.log('bb loader source: ', source, 'map: ', map);
  return source;
}

module.exports.pitch = function(a, b, data){
  // this.cacheable();
  console.log('bb pitch', arguments);
  data.bb = 1;
}
