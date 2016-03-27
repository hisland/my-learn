var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Yes = React.createClass({
  render: function(){
    return (
      <halo> hello </halo>
    );
  }
});

var a = React.createElement('h1', {className: 'b', 'noout': 'what?'}, 'h2')
// var a1 = React.createElement('h1', {className: 'b', 'noout': 'what?'}, <h3>) // h3 不能是jsx

console.log(ReactDOMServer.renderToStaticMarkup(a));
// console.log(ReactDOMServer.renderToStaticMarkup(a1));


var b = React.createElement(Yes)
// var b1 = React.createElement(<Yes />) // Yes 不能是 jsx
var b2 = <Yes />; // JSX 就相当于 React.createElement

console.log('b: ', ReactDOMServer.renderToStaticMarkup(b));
// console.log('b1: ', ReactDOMServer.renderToStaticMarkup(b1));
console.log('b2: ', ReactDOMServer.renderToStaticMarkup(b2));
