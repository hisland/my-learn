var React = require('react');
var ReactDOMServer = require('react-dom/server');

console.log(ReactDOMServer.renderToString);

var a = ReactDOMServer.renderToString(<h1>god</h1>)

console.log(a); // <h1 data-reactid=".gtsuc9dqf4" data-react-checksum="84020432">god</h1>
