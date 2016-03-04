'use strict';

function* god(){
  let a;
  console.log(1);
  a = yield (3+2);
  console.log(2, a);
  let b = yield ('b');
  console.log(3, b);
}

console.log('aa');
var it = god();
console.log('bb');
console.log(it.next());
console.log(it.next());
console.log(it.next()); //没有值了
console.log(it.next()); //没有值了
console.log('end');
