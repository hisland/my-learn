require.ensure(['./b'], function(require){
  var c = require('./c');

  console.log('in a: ', c);
}, 'chunk-cmd'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件
