const { Component, useState } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: {
        some: 'one',
      },
    }
  }
  SetSameOld = () => {
    this.setState({
      obj: this.state.obj,
    })
  }
  SetNewSameValue = () => {
    this.setState({
      obj: {
        some: 'one',
      },
    })
  }
  render() {
    console.log('App render')
    return (
      <div>
        <div>obj.some: {this.state.obj.some}</div>
        <ul>
          <li>class 父级 setState 触发 render, 导致 后代全部 render</li>
          <li>不管后台是 class 还是 hooks</li>
        </ul>
        <div>
          <button onClick={this.SetSameOld}>SetSameOld</button>
          <button onClick={this.SetNewSameValue}>SetNewSameValue</button>
        </div>
        <Sub1></Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    super(props)
    console.log('Sub1 constructor')
  }
  render() {
    console.log('Sub1 render')
    return (
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <Sub2></Sub2>
      </div>
    )
  }
}

class Sub2 extends Component {
  constructor(props) {
    super(props)
    console.log('Sub2 constructor')
  }
  render() {
    console.log('Sub2 render')
    return (
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <Sub3></Sub3>
      </div>
    )
  }
}

function Sub3(props) {
  console.log('Sub3 render')
  return <div style={{ padding: '10px', border: '1px solid cyan' }}>Sub3</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
