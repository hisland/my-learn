import _ from 'lodash';

var aa = {};
var bb = {
  a: '11',
  b:{
    is: 'some'
  }
}

var cc = _.defaults(aa, bb);

console.log('修改的是传入defaults的第一个参数');
console.log(aa === cc)

var dd = {
  a: '222'
}
_.defaults(aa, dd);

console.log('越靠前的值, 优先级越大, 也就是在结果中');
console.log(aa.a === dd.a)
console.log(aa.a === bb.a)


var dd = {
  b: {
    kk: 33
  }
}
_.defaults(aa, dd);

console.log('同名属性, 用前面的, 浅度, 不会合并');
console.log(aa)

var dd = {
  x: {
    ab: 222
  }
}
_.defaults(aa, dd);

console.log('前面没有的, 直接使用后面的');
console.log(aa)

dd.x.ab = 333;
console.log('属性是对象的, 是引用不是深度copy');
console.log(aa)
