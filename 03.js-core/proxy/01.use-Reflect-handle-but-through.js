'use strict'

var tt = {}

var pp = new Proxy(tt, {
  get: function(target, name, receiver){
    return Reflect.get(target, name, receiver);
  },
  set: function(target, name, value, receiver){
    return Reflect.set(target, name, value, receiver);
  }
})

pp.aa = 3;

console.log(pp.aa, tt);


