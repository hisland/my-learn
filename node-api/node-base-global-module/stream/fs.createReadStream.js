// 中文, 可以看出, utf8中文是3字节, 第次8个会不超过8个的输出
var fs =require('fs');

var rr = fs.createReadStream('./fs.createReadStream.js', {
  highWaterMark: 8, // 8个字节一次
  encoding: 'utf8' // 默认是buffer输出
});

rr.on('readable', function(){
  console.log('readable', arguments);
})

// 用 rr.read() 读不出来数据

rr.on('data', function(trunk){
  console.log('data', arguments);
})
rr.on('end', function(){
  console.log('end', arguments);
})
rr.on('close', function(){
  console.log('close', arguments);
})
rr.on('finish', function(){
  console.log('finish', arguments);
})

