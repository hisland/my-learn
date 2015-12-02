var count = 1;
function log(...v){
  console.log(count++, v);
}

function* god(){
  log(1);
  var a = yield 'a';
  log(2, a);
  var b = yield 'b';
  log(3, b);
}

log('aa');
var it = god();
log('bb');
log(it.next());
log(it.next());
log(it.next());
log(it.next());
log('end');

