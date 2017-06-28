"use strict";　

if (true) {　　　　
  function f() {
    console.log(4)
  } // 语法错误
  f()
  console.log(3)
}　　
for (var i = 0; i < 5; i++) {　　　　
  function f2() {
    console.log(i)
  } // 语法错误

  f2()
}
