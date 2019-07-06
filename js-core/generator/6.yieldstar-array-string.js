'use strict';
var count = 1;
function log(...v){
  console.log(count++, v);
}


function* g2(){
  yield* [88, 99];
  yield* 'abc';
  yield* arguments;
}

log('aa');
var it = g2('halo', 'god');
log('bb');
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log('end');
