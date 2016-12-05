require.ensure(['./bb'], function(){
  var bb = require('./bb');
  var cc = require('./cc');

  console.log('in a: bb: ', bb);
  console.log('in a: cc: ', cc);
}, 'chunk-cmd'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件
