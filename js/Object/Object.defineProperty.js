'use strict';

// 兼具 定义/修改 对象上的属性的功能

var a = Object.defineProperty({}, 'prop1', {
  value: 'prop value',
  enumerable: true
})
console.log('defineProperty: ', a);


var o = {};
o.a = 1;
// is equivalent to:
Object.defineProperty(o, 'a', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
});

var a = {
  get a(){
    return this._a;
  }
}
// is equivalent to:
Object.defineProperty(o, 'a', {
  get: [Function: a],
  set: undefined,
  configurable: true,
  enumerable: true
});
a.a = 'some'; // 报错

var a = {
  get a(){
    return this._a;
  },
  set a(val){
    this._a = val;
  }
}
// is equivalent to:
Object.defineProperty(o, 'a', {
  get: [Function: a],
  set: [Function: a],
  configurable: true,
  enumerable: true
});

var a = {
  set a(val){
    this._a = val;
  }
}
// is equivalent to:
Object.defineProperty(o, 'a', {
  get: undefined,
  set: [Function: a],
  configurable: true,
  enumerable: true
});
console.log(a.a); // undefined 不会报错


// On the other hand,
Object.defineProperty(o, 'a', { value: 1 });
// is equivalent to: 其它配置取默认值
Object.defineProperty(o, 'a', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});


// 有2种属性描述 data descriptor 和 accessor descriptor
// data descriptor 和 accessor descriptor 不能共存, 2者只能选其1

// data descriptor 默认值
Object.defineProperty(o, 'a', {
  value: undefined,
  writable: false,
});

// accessor descriptor, function 或者 undefined
Object.defineProperty(o, 'a', {
  get: undefined,
  set: undefined
});

// data 和 accessor 都可以有的key 默认值
Object.defineProperty(o, 'a', {
  configurable: false,
  enumerable: false
});
