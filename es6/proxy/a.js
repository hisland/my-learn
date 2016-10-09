'use strict'

var tt = {}

var pp = new Proxy(tt, {
  get: function(target, name, receiver){
    console.log(target, name);
    return 'some';
  },
  set: function(target, name, value, receiver){
    console.log(target, name, value);
  }
})

pp.aa = 3;
console.log(pp.aa);;


