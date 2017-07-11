module.exports = function(source, map) {
  console.log('------')
  console.log('aa-loader', typeof source, source, map)
  console.log('------')
  this.callback(null, source, map)
  this.callback(null, source, map)
}
