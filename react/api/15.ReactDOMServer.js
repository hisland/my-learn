var React = require('react'); // 这行不能省略
var ReactDOMServer = require('react-dom/server');

console.log(ReactDOMServer.renderToString);

var a = ReactDOMServer.renderToString(<h1>god</h1>)

console.log(a);
