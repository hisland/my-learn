'use strict';
var count = 1;
function log(...v){
  console.log(count++, v);
}

function some(str, time){
  return new Promise(function (resolve, reject){
    setTimeout(function() {
      resolve(str);
    }, time);
  });
}
function* g2(){
  var a1 = yield some('aaa', 300);
  var a2 = yield some('bbb', 500);

  console.log(a1);
  console.log(a2);
  console.log('gen end');
}

log('aa');
// auto runner start
var it = g2();
function step(nextF){
  var next = nextF();
  if (!next.done) {
    next.value.then(function(v){
      step(function(){
        return it.next(v);
      })
    })
  }
}
step(function(){
  return it.next();
});
// auto runner end
log('end');
