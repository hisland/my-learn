import React from 'react';
import ReactDOM from 'react-dom';

class Any extends React.Component{
  render(){
    return <h1>halo {this.props.children}</h1>;
  }
}

var aa = <Any>Hello, world!</Any>;
console.log(aa.props);
ReactDOM.render(
  aa,
  document.getElementById('example')
);
