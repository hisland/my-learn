module.exports = function(source, map){
  // this.cacheable(); // 一个不能 cache, 整条链都不能cache
  console.log('css loader source: ', source, 'map: ', map);
  return 'module.exports = ' + JSON.stringify({css: source});
}
