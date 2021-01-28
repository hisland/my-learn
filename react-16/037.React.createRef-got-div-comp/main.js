const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.div = React.createRef()
    this.comp = React.createRef()
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
        <div>点击 setFoo, 再查看控制台输出 this.el 和 this.comp</div>
        <div>React.createRef 获得的都要加 .current 来获取真正的引用</div>
        <div>
          <button onClick={this.setFoo}>setFoo</button>
        </div>
        <div ref={this.div}>语法比较新</div>
        <Sub ref={this.comp}></Sub>
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
