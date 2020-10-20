const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo1: 123,
      sub: {
        sub1: 1,
        sub2: 2,
      },
    }
  }
  setFoo1 = () => {
    this.setState({
      foo1: Math.random().toString(36),
    })
  }
  setFoo2 = () => {
    this.setState({
      sub: {
        sub1: Math.random().toString(36).substr(2, 2),
      },
    })
  }
  setFoo3 = () => {
    this.setState({
      sub: {
        sub2: Math.random().toString(36).substr(2, 2),
      },
    })
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>
          set state.aa/state.bb 会合并, 但是, aa 的对象, 需要自己处理,
          不会递归合并
        </div>
        <div>
          <button onClick={this.setFoo1}>set1</button>
          <button onClick={this.setFoo2}>set2 sub1</button>
          <button onClick={this.setFoo3}>set3 sub2</button>
        </div>
        <div>foo1: {this.state.foo1}</div>
        <div>sub.aa: {this.state.sub.sub1}</div>
        <div>sub.bb: {this.state.sub.sub2}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
