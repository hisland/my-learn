
var a = require('url!./normal.js');

console.log(a); // base64


var a = require('url?limit=3!./normal.js'); // like file-loader

