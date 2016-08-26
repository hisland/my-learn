var Mustache = require('mustache');

var view = {
  hello: 'hi',
  tag: '<h1> has tag </h1>',
}

console.log(Mustache.render('{{hello}}', view));
console.log(Mustache.render('{{ hello }}', view));
console.log(Mustache.render('{{ tag }}', view));
console.log(Mustache.render('{{ &tag }}', view)); // & 和 3对括号都是不转义输出
console.log(Mustache.render('{{& tag }}', view)); // & 前后有没有空格无所谓
console.log(Mustache.render('{{{ tag }}}', view));
