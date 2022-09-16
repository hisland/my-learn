import ReactDOM from "react-dom";
import React, { Component } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    console.log("constructor App");
    super(props);
    this.state = {
      value: 100,
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

class Sub1 extends Component {
  constructor(props) {
    console.log("constructor Sub1", props);
    super(props);
    this.state = {
      localValue: props.value,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("nextProps, prevState: ", nextProps, prevState);
    return {
      localValue: nextProps.value,
    };
  }
  componentDidMount() {
    console.log("componentDidMount Sub1", this.props, this.state);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Sub1", this.props, this.state);
  }
  render() {
    console.log("render Sub1", this.props);
    const { value } = this.props;
    const { localValue } = this.state;
    return (
      <div style={{ border: "1px solid green", padding: "10px" }}>
        <button
          onClick={() => {
            this.setState({
              localValue: localValue + 1,
            });
          }}
        >
          add1
        </button>
        <div>value: {value}</div>
        <div>localValue: {localValue}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
