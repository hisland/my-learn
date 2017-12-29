import {god} from './a'
import './b'

console.log(god);

setTimeout(function() {
  console.log('app1: changed by b: ', god);
}, 20);

setTimeout(function() {
  console.log('app2: changed by a: ', god);
}, 100);
