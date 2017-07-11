module.exports = function(source, map) {
  let callback = this.async()
  console.log('aa-loader: in')
  setTimeout(function() {
    console.log('aa-loader: done')
    callback(null, source + source)
  }, 1000)
}
