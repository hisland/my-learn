import _ from 'lodash';

var aa = {
  a: {
    b: [1,2]
  }
};
var bb = {
  a: {
    b: [3,5,6]
  }
}

console.log(_.assign(aa, bb));

console.log(aa.a === bb.a);
console.log(aa.a.b === bb.a.b);
