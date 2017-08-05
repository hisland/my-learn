module.exports = function(source, map) {
  console.log('pre-loader: in')
  let callback = this.async()
  setTimeout(function() {
    console.log('pre-loader: done')
    callback(null, source)
  }, 100);
}
