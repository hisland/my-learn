import _ from 'lodash';

var aa = {
  a: {
    b: [1,2]
  }
};
var bb, cc;

console.log(bb = _.cloneDeep(aa));
console.log(aa.a === bb.a);
console.log(aa.a.b === bb.a.b);

console.log(cc = _.clone(aa));
console.log(aa.a === cc.a);
console.log(aa.a.b === cc.a.b);
