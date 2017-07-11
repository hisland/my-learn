module.exports = function(source, map) {
  let callback = this.async()
  console.log('bb-loader: in')
  setTimeout(function() {
    console.log('bb-loader: done')
    callback(null, source + source)
  }, 1000)
}
