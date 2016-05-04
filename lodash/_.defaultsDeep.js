import _ from 'lodash';

var aa = {};
var bb = {
  a: '11',
  b:{
    is: 'some'
  }
}

var cc = _.defaultsDeep(aa, bb);

console.log('修改的是传入defaultsDeep的第一个参数');
console.log(aa === cc)

var dd = {
  a: '222'
}
_.defaultsDeep(aa, dd);

console.log('越靠前的值, 优先级越大, 也就是在结果中');
console.log(aa.a === dd.a)
console.log(aa.a === bb.a)


var dd = {
  b: {
    kk: 33
  }
}
_.defaultsDeep(aa, dd);

console.log('同名属性, 用前面的, 深度合并');
console.log(aa)

var dd = {
  x: {
    ab: 222
  }
}
_.defaultsDeep(aa, dd);

console.log('前面没有的, 直接使用后面的');
console.log(aa)

dd.x.ab = 333;
console.log('属性是对象的, 是深度copy');
console.log(dd)
console.log(aa)

var dd = {
  ok: [4,5,6]
}
_.defaultsDeep(aa, dd);
console.log('属性是数组的, 直接使用前面的');
console.log(aa)

dd.ok.push('some')
console.log('属性是数组的, 深度copy, 修改后者前者不变');
console.log(aa)
