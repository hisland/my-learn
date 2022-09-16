import ReactDOM from "react-dom";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    console.log("constructor App");
    super(props);
    this.state = {
      value: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount App", this.props, this.state);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate App", this.props, this.state);
  }
  render() {
    console.log("render App", this.props);
    const { value } = this.state;
    return (
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <button
          onClick={() => {
            this.setState({
              value: value + 1,
            });
          }}
        >
          add1
        </button>
        <Sub1 value={value}></Sub1>
      </div>
    );
  }
}

function Sub1(props) {
  console.log("Sub1 render", props);
  const { value } = props;
  const [localValue, set_localValue] = useState(props.value);
  useEffect(() => {
    console.log("Sub1 useEffect", props);
    set_localValue(props.value);
  }, [props.value]);
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <button
        onClick={() => {
          set_localValue(localValue + 1);
        }}
      >
        add1
      </button>
      <div>value: {value}</div>
      <div>localValue: {localValue}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
