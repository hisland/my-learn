module.exports = function(source, map) {
  console.log('post-loader: in')
  let callback = this.async()
  setTimeout(function() {
    callback(null, source)
  }, 400);
}
