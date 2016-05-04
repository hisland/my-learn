'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aa = {
  a: {
    b: [1, 2]
  }
};
var bb, cc;

console.log(bb = _lodash2.default.cloneDeep(aa));
console.log(aa.a === bb.a);
console.log(aa.a.b === bb.a.b);

console.log(cc = _lodash2.default.clone(aa));
console.log(aa.a === cc.a);
console.log(aa.a.b === cc.a.b);
