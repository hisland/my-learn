function HelloPlugin(options){
  console.log('bb-plugin init', 11);
}

HelloPlugin.prototype.apply = function(compiler){
  console.log('bb-plugin apply', 22);
  compiler.plugin('done', function(state){
    console.log('bb-plugin done', 33);
    console.log('bb-plugin done', 'HelloPlugin');
  })
  compiler.plugin('emit', function(compilation, callback){
      console.log('bb-plugin emit', 66);
    setTimeout(function() {
      console.log('bb-plugin emit', 77);
      callback();
    }, 500);
  })
  compiler.plugin('compilation', function(compilation){
    console.log('bb-plugin compilation', 44);
    compilation.plugin('optimize', function(){
      console.log('bb-plugin optimize', 55);
      console.log('bb-plugin optimize', 'aha');
    })
  })
}

module.exports = HelloPlugin;

