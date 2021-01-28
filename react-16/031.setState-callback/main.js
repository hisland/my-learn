const { Component } = React

function outer() {
  console.log('outer', arguments, this)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    console.log('parent: run code constructor')
  }
  foo() {
    console.log('foo', arguments, this)
  }
  bar() {
    console.log('bar', arguments, this)
    this.setState({ show: !this.state.show }, this.foo)
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>setState 的回调, 不管怎么调用都没有参数</div>
        <div>并且回调的 this 会指向实例</div>
        <div>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show }, outer)
            }}
          >
            toggle outer {this.state.show}
          </button>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show }, this.foo)
            }}
          >
            toggle1 {this.state.show}
          </button>
          <button
            onClick={() => {
              this.bar()
            }}
          >
            toggle2 {this.state.show}
          </button>
          <button onClick={this.bar.bind(this)}>
            toggle3 {this.state.show}
          </button>
        </div>
        <div>{this.state.show ? 'show' : 'hide'}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('root: run code after')
