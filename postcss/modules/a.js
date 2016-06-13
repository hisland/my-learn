var fs = require('fs');
var postcss = require('postcss');
var modules = require('postcss-modules');

var processor = postcss([modules({
  getJSON: function(cssFileName, json) {
    console.log(arguments);
    var path = require('path');
    var cssName = path.basename(cssFileName, '.css')
    var jsonFileName = path.resolve('./build' + cssName + '.json')
    fs.writeFileSync(jsonFileName, JSON.stringify(json))
  }
})]);

/*

现在只知道 postcss --use postcss-modules -o a.css styles.css
代码如何实现还不清楚

 */
