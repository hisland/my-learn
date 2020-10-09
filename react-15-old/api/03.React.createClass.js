var React = require('react');
var ReactDOMServer = require('react-dom/server');

var yes = React.createClass({ // 首字母 小写不行, 被认为是普通html元素
  render: function(){ // 必须实现 render 方法
    return (
      <halo> hello </halo>
    );
  }
});

var a = ReactDOMServer.renderToStaticMarkup(<yes>god</yes>);
console.log(a);



var God = React.createClass({ // 首字母要大写, 会递归展开
  render: function(){
    return (
      <halo> hello </halo>
    );
  }
});

var b = ReactDOMServer.renderToStaticMarkup(<God>god</God>);
console.log(b);

