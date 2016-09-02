var ejs = require('ejs');

var some = 'word';
var withTag = '<h1>tag</h1>';
var long = `hey man`;

// js script
ejs.render('<% console.log(some) %>', {some: some})

// output escape html
console.log(ejs.render('<%= withTag %>', {withTag: withTag}));

// output unescape html
console.log(ejs.render('<%- withTag %>', {withTag: withTag}));

// comment
console.log(ejs.render('<%# nothing %>', {withTag: withTag}));

// output <%, no need  %>
console.log(ejs.render('<%%', {withTag: withTag}));
console.log(ejs.render('%%>', {withTag: withTag}));
console.log(ejs.render('%%%>', {withTag: withTag}));
console.log(ejs.render('<%%%', {withTag: withTag}));

// newline slurp
console.log(ejs.render(`
  <%= long %>
  <%= long %>`, {long: long}));
console.log(ejs.render(`
  <%= long -%>
  <%= long %>
  <%= long %>`, {long: long}));
