const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidUpdate() {
    console.log(this)
  }
  setFoo = () => {
    this.setState({
      foo: Math.random().toString(36),
    })
  }
  render() {
    console.log('parent: run code render')
    return (
      <div>
        <div>点击 setFoo, 再查看控制台输出 this.div 和 this.comp</div>
        <div>
          <button onClick={this.setFoo}>setFoo</button>
        </div>
        <div ref={(el) => (this.div = el)}>语法比较新</div>
        <Sub ref={(comp) => (this.comp = comp)}></Sub>
      </div>
    )
  }
}

class Sub extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>hello</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
