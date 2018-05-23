module.exports = function(source, map) {
  console.log('post-loader: in')
  let callback = this.async()
  setTimeout(function() {
    console.log('post-loader: done')
    callback(null, source)
  }, 400);
}
