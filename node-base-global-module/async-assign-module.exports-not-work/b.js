module.exports = {
  some: 'god'
}; // a里面获得了此引用

setTimeout(function() {
  module.exports = {
    any: 'other'
  } // 修改 导出对象, 这种方式很奇怪, 不应该使用吧
}, 10);
