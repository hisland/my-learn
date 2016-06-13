function HelloPlugin(options){
  console.log(11);
}

HelloPlugin.prototype.apply = function(compiler){
  console.log(22);
  compiler.plugin('done', function(state){
    console.log(33);
    console.log('HelloPlugin');
  })
  compiler.plugin('emit', function(compilation, callback){
      console.log(66);
    setTimeout(function() {
      console.log(77);
      callback();
    }, 500);
  })
  compiler.plugin('compilation', function(compilation){
    console.log(44);
    compilation.plugin('optimize', function(){
      console.log(55);
      console.log('aha');
    })
  })
}

module.exports = HelloPlugin;

