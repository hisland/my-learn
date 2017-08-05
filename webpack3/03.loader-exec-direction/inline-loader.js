module.exports = function(source, map) {
  console.log('inline-loader: in')
  let callback = this.async()
  setTimeout(function() {
    console.log('inline-loader: done')
    callback(null, source)
  }, 300);
}
