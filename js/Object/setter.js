'use strict';

var o = {
  set current(str) {
    this.log[this.log.length] = str;
  },
  log: []
}

o.current = 'god';

console.log(o.current);
console.log(o);

delete o.current;
console.log(o.current);
console.log(o);


var o = { a:0 };
Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });
o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o, o.a) // 5

// Using a computed property name ES6
var expr = "foo";
var obj = {
  baz: "bar",
  // set [expr](v) { this.baz = v; } // only ES6+
};
console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
