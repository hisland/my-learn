var ejs = require('ejs');

var some = 'word';
var people = ['jack', 'neil', 'alex']

// include 会把 它的输出内容拿进来, 而不是原始代码
console.log(ejs.render(
`
<ul>
  <%= partial('./03.include.b.ejs') %>
</ul>
`, {filename: 'abc'}));
