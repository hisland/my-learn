'use strict';
// Object.create(proto[, propertiesObject])

var o;

// create an object with null as prototype
o = Object.create(null);


o = {};
// is equivalent to:
o = Object.create(Object.prototype);



var p = {
	a: 1,
	b: 2,
	c: 'god'
}

var a = Object.create(p);
console.log('a.a: ', a.a);
console.log('a.b: ', a.b);
console.log('a.c: ', a.c);
console.log('a.__proto__ === p: ', a.__proto__ === p);


var b = Object.create(p, {
	god: {
		value: 333,
		writable: true
	}
});
console.log(b.god);
b.god = 4;
console.log(b.god);
