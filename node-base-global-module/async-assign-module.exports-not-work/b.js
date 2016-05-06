module.exports = {
  some: 'god'
}; // a里面获得了此引用

setTimeout(function() {
  module.exports = {
    any: 'other'
  }; // 显然修改了 module.exports, 但是 外部 require 还是指向之前的对象, 因为是引用
}, 10);
