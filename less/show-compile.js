var less = require('less');
var fs = require('fs');

fs.watch('./test.less', function() {
  compile();
});

var last = null;

function compile() {
  less
    .render(fs.readFileSync('./test.less', 'utf-8'))
    .then(function(rs) {
      if (rs.css !== last) {
        last = rs.css;
        console.log(rs.css);
        console.log('--------------------\n\n');
      }
    })
}

compile();
