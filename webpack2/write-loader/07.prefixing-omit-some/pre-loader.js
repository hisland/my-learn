module.exports = function(source, map) {
  console.log('pre-loader: in')
  let callback = this.async()
  setTimeout(function() {
    callback(null, source)
  }, 100);
}
