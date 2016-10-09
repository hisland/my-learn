'use strict'

var tt = {}

var pp = new Proxy(tt, {
})

pp.aa = 3;
console.log(pp.aa);
pp.aa = 'xx';
console.log(pp.aa);


