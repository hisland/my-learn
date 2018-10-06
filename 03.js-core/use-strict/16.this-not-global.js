function f1() {　　　　
  return !this;　　
}

console.log(f1(), '返回false，因为"this"指向全局对象，"!this"就是false');

function f2() {　　　　
  "use strict";　　　　
  return !this;　　
}

console.log(f2(), '返回true，因为严格模式下，this的值为undefined，所以"!this"为true。');
