require.ensure(['./bb'], function(){
  var bb = require('./bb');

  console.log('in a: bb: ', bb);
}, 'vendor'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件

require.ensure(['./dd'], function(){
  var dd = require('./dd');

  console.log('in a: dd: ', dd);
}, 'vendor'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件

require.ensure(['./cc'], function(){
  var cc = require('./cc');

  console.log('in a: cc: ', cc);
}); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件
