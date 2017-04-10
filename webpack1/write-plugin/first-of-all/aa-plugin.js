function HelloPlugin(options){
  console.log('aa', 11);
}

HelloPlugin.prototype.apply = function(compiler){
  console.log('aa', 22);
  compiler.plugin('done', function(state){
    console.log('aa', 33);
    console.log('aa', 'HelloPlugin');
  })
  compiler.plugin('emit', function(compilation, callback){
      console.log('aa', 66);
    setTimeout(function() {
      console.log('aa', 77);
      callback();
    }, 500);
  })
  compiler.plugin('compilation', function(compilation){
    console.log('aa', 44);
    compilation.plugin('optimize', function(){
      console.log('aa', 55);
      console.log('aa', 'aha');
    })
  })
}

module.exports = HelloPlugin;

