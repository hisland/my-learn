import {
  god
} from './a'
import * as ns from './a'
console.log('god in b:', god);
console.log('ns in b:', god);

setTimeout(function() {
  // god = 444; // read-only, 报错
  ns.god = 555; // 能正常修改a的值
  console.log('ns in b2:', ns.god);
}, 10);
