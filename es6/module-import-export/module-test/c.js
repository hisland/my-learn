import {bb} from './b.out';
console.log(bb);
setTimeout(function() {
  console.log('c', bb);
}, 700);
