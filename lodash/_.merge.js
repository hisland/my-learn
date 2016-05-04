import _ from 'lodash';

var a = {
  b:{
    is: 'some'
  }
}

var b = _.merge({}, a);

console.log('a: ', a);
console.log('b: ', b);

b.b.is = 'ok';
console.log('a: ', a);
console.log('b: ', b);

console.log('_.merge: 深度克隆, 修改了传入的第一个参数');


var aa = {qq: 1};
var bb = {qq: 2};
console.log(_.merge(aa, bb));
console.log('_.merge: 后面的会覆盖前面的同名属性');
console.log('-------------');

var c = _.defaultsDeep({cc: 'test', b: {is: 'yes'}}, a);
console.log('a: ', a);
console.log('c: ', c);

c.b.is = 'ok';
console.log('a: ', a);
console.log('c: ', c);

console.log('_.defaultsDeep: 深度克隆, 修改了传入的第一个参数, 前面的值覆盖后面的值');
console.log('-------------');

var c = _.assign({}, a);
console.log('a: ', a);
console.log('c: ', c);

c.b.is = 'ok';
console.log('a: ', a);
console.log('c: ', c);

console.log('_.assign: 浅度克隆, 修改了传入的第一个参数, 后面的值覆盖前面的值');
console.log('-------------');

var c = _.defaults({}, a);
console.log('a: ', a);
console.log('c: ', c);

c.b.is = 'ok';
console.log('a: ', a);
console.log('c: ', c);

console.log('_.defaults: 浅度克隆, 修改了传入的第一个参数, 前面的值覆盖后面的值');
console.log('-------------');


  function __length1Prefix0(value) {
    value += '';
    return value.length == 1 ? '0' + value : value;
  }
var d = new Date;
console.log(__length1Prefix0(d.getMonth() + 1)+__length1Prefix0(d.getDate()));
