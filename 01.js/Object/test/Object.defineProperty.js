'use strict';

var a = {};
a.b = 1;
Object.defineProperty(a, 'c', {value: 2})
Object.defineProperty(a, 'd', {get: function(){
  return this._d;
},set:function(val){
  console.log(arguments);
  console.log(this);
  this._d = val;
}})
console.log(Object.getOwnPropertyDescriptor(a, 'b'));
console.log(Object.getOwnPropertyDescriptor(a, 'c'));
console.log(Object.getOwnPropertyDescriptor(a, 'd'));


var a = {};
a.b = 1;
console.log('默认是 data desc', Object.getOwnPropertyDescriptor(a, 'b'));
console.log(a.b);
Object.defineProperty(a, 'b', {get: function(){
  return 3;
}})
console.log('修改为 accessor desc', Object.getOwnPropertyDescriptor(a, 'b'));
console.log(a.b);
Object.defineProperty(a, 'b', {value: 99})
console.log('修改回 data desc', Object.getOwnPropertyDescriptor(a, 'b'));
console.log(a.b);



var a = {
  get b(){
    return 33;
  },
  set b(val){
    this._b = val;
  }
};

console.log('默认是 data desc', Object.getOwnPropertyDescriptor(a, 'b'));
console.log(a.b);

Object.defineProperty(a, 'b', {value: 99})
console.log('修改为 data desc', Object.getOwnPropertyDescriptor(a, 'b'));
console.log(a.b);



















