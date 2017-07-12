module.exports = function(source, map) {
  console.log('normal-loader: in')
  let callback = this.async()
  setTimeout(function() {
    callback(null, source)
  }, 200);
}
