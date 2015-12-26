'use strict';

var Buffer = require('buffer').Buffer;

var a1 = new Buffer('ok');

var it = a1.entries();
for(let i of it){
  console.log(i);
}

var it = a1.keys();
for(let i of it){
  console.log(i);
}

var it = a1.values();
for(let i of it){
  console.log(i);
}

console.log(a1[0]);
console.log(a1[1]);
console.log(a1[2]);

var a2 = new Buffer('123');
console.log(a1.compare(a2));
console.log(a2.compare(a1));


console.log(a2.equals(a1));
