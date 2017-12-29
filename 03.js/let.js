'use strict';

function test(){
  var arr = [1,2,3];
  for(var i in arr ){
    let k = i; // 只在 for 里面起作用
    console.log(k, i);
  }
  console.log(i);
}
test();
