'use strict'

var tt = {}

var pp = new Proxy(tt, {
  get: function(target, name, receiver){
    return 'same value';
  }
})

console.log(pp.aa);
console.log(pp.bb);
console.log(pp.cc);


