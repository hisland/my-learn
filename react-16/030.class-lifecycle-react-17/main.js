const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    console.log('parent: run code constructor')
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show })
            }}
          >
            toggle {this.state.show}
          </button>
        </div>
        <div>{this.state.show ? <Sub1></Sub1> : <div>not</div>}</div>
      </div>
    )
  }
}
class Sub1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: '11',
    }
    console.log('sub1: run code constructor')
  }
  componentDidMount() {
    console.log('sub1: run code componentDidMount')
  }
  componentDidUpdate() {
    console.log('sub1: run code componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('sub1: run code componentWillUnmount')
  }
  render() {
    console.log('sub1: run code render sub1')
    return (
      <div id="app">
        <div>hello {this.state.hello}</div>
        <div>
          <button
            onClick={() => {
              this.setState({ hello: Math.random() })
            }}
          >
            set hello, just re run render
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('root: run code after')
