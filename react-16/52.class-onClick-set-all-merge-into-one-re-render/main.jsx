const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState()

  return (
    <div>
      <ul>
        <li>onClick 回调 里的 set 全部合并成一次 render 了</li>
        <li>和案例 50 差不多</li>
      </ul>
      <div>
        <button onClick={() => setFoo(Math.random().toString(36))}>
          setFoo {foo}
        </button>
      </div>
      <div>
        <HocRefreshSub>
          <Sub2></Sub2>
        </HocRefreshSub>
      </div>
    </div>
  )
}
class HocRefreshSub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      foo: 'init',
    }
    console.log('Sub2 constructor')
  }
  toggle = () => {
    const { show } = this.state
    this.setState({ show: false })
    console.log('HocRefreshSub show 1-1', show)
    this.setState({ foo: Math.random().toString(36) })
    console.log('HocRefreshSub show 1-2', show)
    // setTimeout(() => {
      this.setState({ show: true })
      console.log('HocRefreshSub show 2-1', show)
      this.setState({ foo: Math.random().toString(36) })
      console.log('HocRefreshSub show 2-2', show)
      this.setState({ show: false })
      console.log('HocRefreshSub show 3-1', show)
      this.setState({ foo: Math.random().toString(36) })
      console.log('HocRefreshSub show 3-2', show)
      this.setState({ show: true })
      this.setState({ foo: Math.random().toString(36) })
    // }, 100)
  }
  render() {
    console.log('HocRefreshSub render')

    return (
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <div>
          <button onClick={this.toggle}>刷新子组件 {this.state.foo}</button>
        </div>
        {this.state.show && this.props.children}
      </div>
    )
  }
}

class Sub2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: 'init',
    }
    console.log('Sub2 constructor')
  }
  componentDidMount() {
    console.log('Sub2 componentDidMount')
  }
  componentDidUpdate() {
    console.log('Sub2 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Sub2 componentWillUnmount')
  }
  render() {
    console.log('Sub2 render')
    return (
      <div style={{ padding: '10px', border: '1px solid red' }}>
        <div>
          <button
            onClick={() => this.setState({ bar: Math.random().toString(36) })}
          >
            setBar
          </button>
        </div>
        <div>Sub2 {this.state.bar}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
