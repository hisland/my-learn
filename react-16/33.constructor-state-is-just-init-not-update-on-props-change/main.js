const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 123,
    }
    console.log('parent: run code constructor')
  }
  setFoo = () => {
    console.log('parent: foo', this)
    this.setState({
      foo: Math.random().toString(36),
    })
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>语法比较新</div>
        <div>
          <button onClick={this.setFoo}>random</button>
        </div>
        <Sub1 foo={this.state.foo}></Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo1: props.foo,
    }
    console.log('sub: run code constructor')
  }
  render() {
    console.log('sub: run code render', this.props)
    return (
      <div>
        <div>state.foo1: {this.state.foo1}</div>
        <div>props.foo: {this.props.foo}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('root: run code after')
