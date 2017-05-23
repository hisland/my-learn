import _ from 'lodash';

var aa = {};
var bb = {
  a: '11',
  b:{
    is: 'some'
  }
}

var cc = _.merge(aa, bb);

console.log('修改的是传入merge的第一个参数');
console.log(aa === cc)

var dd = {
  a: '222'
}
_.merge(aa, dd);

console.log('越靠后的值, 优先级越大, 也就是在结果中');
console.log(aa.a === dd.a)


var dd = {
  b: {
    kk: 33
  }
}
_.merge(aa, dd);

console.log('子结构是对象, 合并');
console.log(aa)

var dd = {
  b: 222
}
_.merge(aa, dd);

console.log('子结构不同, 后面覆盖前面');
console.log(aa)

aa.cc = [1,2,3,4,5,6]
dd = {
  cc: [4,5,6]
}
_.merge(aa, dd);

console.log('子结构都是数组, 后面覆盖前面');
console.log(aa)
