require.ensure([], function(require){
  var b = require('./b');
  var c = require('./c');

  console.log('in a: ', b);
  console.log('in a: ', c);
}, 'halo'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件
