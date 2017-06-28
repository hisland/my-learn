require.ensure(['./bb'], function(){ // 此处 bb.js 和 cc.js 打入同一个包, 只是不会被执行
  var cc = require('./cc'); // bb.js 和 cc.js 打入同一个包, 这里执行了

  console.log('in a: cc: ', cc);
}, 'chunk-cmd'); //指定 name , 不同文件的都会合并到同一个文件里面, 否则会自己生成一个文件
