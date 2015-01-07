// use folder name
var a = require('./a')
console.log(a);

// not the package.json's name property
try {
  var test = require('./test')
  console.log(test);
} catch (e) {
  console.log("not the package.json's name property");
  console.log(e.message);
}

// use folder name
var b = require('./b')
console.log(b);
