function HelloPlugin(options){
  console.log('aa-plugin init', 11);
}

HelloPlugin.prototype.apply = function(compiler){
  console.log('aa-plugin apply', 22);
  compiler.plugin('done', function(state){
    console.log('aa-plugin done', 33);
    console.log('aa-plugin done', 'HelloPlugin');
  })
  compiler.plugin('emit', function(compilation, callback){
      console.log('aa-plugin emit', 66);
    setTimeout(function() {
      console.log('aa-plugin emit', 77);
      callback();
    }, 500);
  })
  compiler.plugin('compilation', function(compilation){
    console.log('aa-plugin compilation', 44);
    compilation.plugin('optimize', function(){
      console.log('aa-plugin optimize', 55);
      console.log('aa-plugin optimize', 'aha');
    })
  })
}

module.exports = HelloPlugin;

