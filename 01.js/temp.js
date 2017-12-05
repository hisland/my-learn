'use strict';

function test(){
  var arr = [1,2,3];
  for(var i in arr ){
    let k = i;
    console.log(k, i);
  }
  console.log(i);
}
test();
