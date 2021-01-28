const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    console.log('parent: run code constructor')
  }
  foo = () => {
    console.log('foo', this)
  }
  bar() {
    console.log('bar', this)
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>因为 js this 的指向问题, 绑定事件需要 this.foo.bind(this)</div>
        <div>class field 是箭头函数, 直接写 this.foo 就好了</div>
        <div>语法比较新</div>
        <div>
          <button onClick={this.foo}>ok {this.state.show}</button>
          <button onClick={this.bar}>fail {this.state.show}</button>
        </div>
        <div>{this.state.show ? 'show' : 'hide'}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('root: run code after')
