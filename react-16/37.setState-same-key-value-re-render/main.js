const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      some: {
        obj: 'one',
      },
    }
  }
  setSame = () => {
    this.setState({
      some: this.state.some,
    })
  }
  setNew = () => {
    this.setState({
      some: {
        obj: Math.random().toString(36),
      },
    })
  }
  render() {
    console.log('parent: run render')
    return (
      <div>
        <div>some.obj: {this.state.some.obj}</div>
        <div>
          <button onClick={this.setSame}>setSame</button>
          <button onClick={this.setNew}>setNew</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
