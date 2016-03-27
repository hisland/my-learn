var React = require('react');
var ReactDOMServer = require('react-dom/server');


var aa = React.createElement('h1', {className: 'b', 'noout': 'what?'}, 'h2')

console.log('aa:', ReactDOMServer.renderToStaticMarkup(aa));


var bb = React.cloneElement(aa, {className: 'aka'})
console.log('bb: ', ReactDOMServer.renderToStaticMarkup(bb));


var cc = <h1 className="hello">please</h1> // class 要使用 className

console.log('cc:', ReactDOMServer.renderToStaticMarkup(cc));


var dd = React.cloneElement(cc, {className: 'aka'})
console.log('dd: ', ReactDOMServer.renderToStaticMarkup(dd));
