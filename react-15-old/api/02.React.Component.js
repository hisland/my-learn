import React from 'react';
import ReactDOMServer from 'react-dom/server';


class Any extends React.Component{
  render(){
    return <h1>halo</h1>;
  }
}

var aa = <Any halo="god" />;

console.log(aa.props);
console.log('aa:', ReactDOMServer.renderToStaticMarkup(aa));
