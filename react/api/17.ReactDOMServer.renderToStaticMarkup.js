var React = require('react');
var ReactDOMServer = require('react-dom/server');

console.log(ReactDOMServer.renderToStaticMarkup);

var a = ReactDOMServer.renderToStaticMarkup(<h1>god</h1>)

console.log(a); // <h1>god</h1>
