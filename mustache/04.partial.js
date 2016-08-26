var Mustache = require('mustache');

var view = {
  title: 'hi',
  foo: 'bar',
}

// 片段, 渲染规则完全符合前面的, 感觉完全相当于就存在于那个位置, 只是提出来了而已
// 据文档介绍, 完全继承了父的内容, 不像隔离的组件那样需要显示传递
console.log(Mustache.render(
  '{{> am}}',
  view,
  {
    am: '{{foo}}'
  }));
