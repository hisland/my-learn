var a = require('file!./normal.js');
console.log(a); // a 是 相对url

var a = require('file?name=god/a/b/c.d!./normal.js');

var a = require('file?name=god/a/d!./normal.js');

var a = require('file?name=god/a/[hash]!./normal.js');
