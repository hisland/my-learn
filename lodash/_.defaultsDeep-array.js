import _ from 'lodash';

var aa = {
  a: [1,2]
};
var bb = {
  a: [3,5,6]
}

console.log(_.defaultsDeep(aa, bb));
