var ejs = require('ejs');

var some = 'word';
var people = ['jack', 'neil', 'alex']

// include 会把 它的输出内容拿进来, 而不是原始代码
console.log(ejs.render(
`
<ul>
  <%= include('./03.include.b.ejs') %>
  <%- include('./03.include.b.ejs') %> <%# 更多需要这样子, 避免双重escape %>
</ul>
`, {filename: 'abc'}));
