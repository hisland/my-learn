import {
  b
} from './a'
import {
  b2
} from './a'
import {
  c
} from './a'

console.log(12, b(123));
console.log(1, b2(123));
console.log(1, c(123));


setTimeout(function() {
  console.log(2, b(123));
  console.log(2, b2(123));
  console.log(2, c(123));
}, 10);
