'use strict'
if (true) {
  function f1() {
    console.log(4)
  } // 语法错误
  f1()
  console.log(3)
}
for (const ii = 0; ii < 5; ii++) {
  function f2() {
    console.log(ii)
  } // 语法错误

  f2()
}
