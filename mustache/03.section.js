var Mustache = require('mustache');

var view = {
  title: 'hi',
  calc: function() {
    return 2 + 4;
  },
  list: ['a', 'b', 'c'],
  emptyList: [],
  list2: [
    {foo: 'foo'},
    {foo: 'bar'},
  ],
  f: function() {
    return function(text, render) {
      return render(text);
    };
  }
}

// # 开头, / 结尾
// #foo 值为trueth 才输入里面的内容
// 解析的时候, 换行符被保留了
console.log(Mustache.render(
`
undefined: 不输出
{{#no}}
some word
{{/no}}
`, view));
console.log('----------');

console.log(Mustache.render(
`
emptyList: 不输出
{{#emptyList}}
some word
{{/emptyList}}
`, view));
console.log('----------');

console.log(Mustache.render(
`
title
{{#title}}
some word
{{/title}}
`, view));

console.log('----------');
console.log(Mustache.render(
`
list: dot
{{#list}}
  {{.}}
{{/list}}
`, view));

console.log('----------');
console.log(Mustache.render(
`
list2: prop
{{#list2}}
  {{foo}}
{{/list2}}
`, view));

console.log('----------');
console.log(Mustache.render(
`
invert: false会输入, 与上面刚好相反
{{^no}}
  got
{{/no}}
`, view));


console.log('----------');
console.log(Mustache.render(
`
function: 返回一个 render 函数, render里面的内容
{{#f}}
  oh {{title}}
{{/f}}
`, view));
