const {connect} = dva;
const {routerRedux} = dva.router;
export default connect((state) => {
  console.log("connect Comp2: ", state);
  return {
    foo: state.foo
  };
})((props) => {
  console.log("Comp2: ", props);
  const {dispatch} = props;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, "Hello Comp2 ", props.foo.that), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => dispatch(routerRedux.push("/sub1"))
  }, "go sub1")));
});
