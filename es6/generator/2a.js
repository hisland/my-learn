'use strict';
var count = 1;
function log(...v){
  console.log(count++, v);
}


function* g1(){
  yield 2;
  yield 3;
  yield 4;
}
function* g2(){
  yield 1;
  yield* g1();
  yield 5;
}

log('aa');
var it = g2();
log('bb');
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log('end');
