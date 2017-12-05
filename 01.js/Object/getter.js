'use strict';

var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return 'no log';
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Will return "test".
delete obj.latest;
console.log (obj.latest); // Will return undefined.


var o = { a:0 }
Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });
console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


// Using a computed property name ES6
var expr = "foo";
var obj = {
  // get [expr]() { return "bar"; } // only ES6+
};
console.log(obj.foo); // "bar"
