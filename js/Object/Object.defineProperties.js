// 根据 defineProperty 指设置属性
// syntax: Object.defineProperties(obj, props)
// props 的 enumerable properties, key作为obj的key, value作为objprop描述

var a;

a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value'
  }
})
console.log('--------------------');
console.log('enumerable not: ', a);

a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    enumerable: true
  }
})
console.log('--------------------');
console.log('enumerable yes: ', a);



a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    enumerable: true,
    writable: true
  }
})
console.log('--------------------');
console.log('writable before: ', a);
a.prop1 = 3;
console.log('writable after: ', a);
a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    enumerable: true,
    writable: false
  }
})
console.log('--------------------');
console.log('not writable before: ', a);
a.prop1 = 3;
console.log('not writable after: ', a);


a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    enumerable: true,
    configurable: true
  }
})
console.log('--------------------');
console.log('delete able: ', a);
delete a.prop1;
console.log('delete able: ', a);

a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    enumerable: true,
    configurable: false
  }
})
console.log('--------------------');
console.log('delete not: ', a);
delete a.prop1;
console.log('delete not: ', a);


a = Object.defineProperties({}, {
  prop1: {
    value: 'prop value',
    configurable: false,
    enumerable: true
  }
})
console.log('--------------------');
Object.defineProperties(a, {
  prop1: {
    // writable: true //Cannot redefine property: prop1
  }
})
a.prop1 = 3;
console.log('configurable not: ', a);


var vv = 33;
a = Object.defineProperties({}, {
  prop1: {
    enumerable: true,
    get: function() {
      return vv;
    },
    set: function(v) {
      vv = v;
    }
  }
})
console.log('--------------------getter setter');
console.log(a);
console.log('a.prop1: ', a.prop1);
a.prop1 = 55;
console.log('a.prop1: ', a.prop1);
console.log('vv: ', vv);

