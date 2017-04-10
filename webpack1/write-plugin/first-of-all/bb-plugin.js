function HelloPlugin(options){
  console.log('bb', 11);
}

HelloPlugin.prototype.apply = function(compiler){
  console.log('bb', 22);
  compiler.plugin('done', function(state){
    console.log('bb', 33);
    console.log('bb', 'HelloPlugin');
  })
  compiler.plugin('emit', function(compilation, callback){
      console.log('bb', 66);
    setTimeout(function() {
      console.log('bb', 77);
      callback();
    }, 500);
  })
  compiler.plugin('compilation', function(compilation){
    console.log('bb', 44);
    compilation.plugin('optimize', function(){
      console.log('bb', 55);
      console.log('bb', 'aha');
    })
  })
}

module.exports = HelloPlugin;

