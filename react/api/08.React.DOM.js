var React = require('react');
var ReactDOMServer = require('react-dom/server');


var aa = React.DOM.div(null, 'Hello World!')
console.log('aa:', ReactDOMServer.renderToStaticMarkup(aa));

var bb = React.DOM.div({className: 'abc'}, 'Hello World!')
console.log('bb:', ReactDOMServer.renderToStaticMarkup(bb));


