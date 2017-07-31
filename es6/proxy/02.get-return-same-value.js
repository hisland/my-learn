'use strict'

var tt = {}

var pp = new Proxy(tt, {
  get: function(target, name, receiver){
    return 33
  }
})

console.log(pp.aa);
console.log(pp.bb);
console.log(pp.cc);
console.log(pp.dd);


