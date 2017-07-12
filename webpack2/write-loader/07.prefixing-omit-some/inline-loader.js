module.exports = function(source, map) {
  console.log('inline-loader: in')
  let callback = this.async()
  setTimeout(function() {
    callback(null, source)
  }, 300);
}
