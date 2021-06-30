(() => {
  // aa.jsx
  console.log("aa");
  var App = class extends React.Component {
    render() {
      return /* @__PURE__ */ React.createElement("div", null, "hello");
    }
  };
  ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("app"));
})();
