module.exports = function(source, map) {
  console.log('normal-loader: in')
  let callback = this.async()
  setTimeout(function() {
    console.log('normal-loader: done')
    callback(null, source)
  }, 200);
}
