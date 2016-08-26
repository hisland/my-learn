var Mustache = require('mustache');

var view = {
  title: 'hi',
  calc: function() {
    return 2 + 4;
  }
}

var output = Mustache.render('title: {{title}}, calc: {{calc}}', view);
console.log(output);
