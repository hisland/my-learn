function f1() {　　　　
  "use strict";　　　　
  f1.caller; // 报错
  f1.callee; // 报错
  f1.arguments; // 报错
}　　
f1();
