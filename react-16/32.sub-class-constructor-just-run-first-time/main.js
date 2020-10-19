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
    console.log('parent: foo', this)
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>子组件的 constructor 只会执行一次</div>
        <div>
          <button onClick={this.foo}>ok {this.state.show ? 'aa' : 'bb'}</button>
        </div>
        <Sub></Sub>
      </div>
    )
  }
}

class Sub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    console.log('sub: run code constructor')
  }
  foo = () => {
    console.log('sub: foo', this)
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    console.log('sub: run code render')
    return (
      <div>
        <div>sub sub</div>
        <div>
          <button onClick={this.foo}>ok {this.state.show ? 'aa' : 'bb'}</button>
        </div>
        <div>{this.state.show ? 'show' : 'hide'}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('root: run code after')
