const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState()

  return (
    <div>
      <ul>
        <li></li>
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

function HocRefreshSub({ children }) {
  console.log('HocRefreshSub render')

  const [show, setShow] = useState(true)

  function toggle() {
    setShow(false)
    console.log('HocRefreshSub show', show)
    setTimeout(() => {
      setShow(true)
      console.log('HocRefreshSub show', show)
    }, 0)
  }

  return (
    <div style={{ padding: '10px', border: '1px solid green' }}>
      <div>
        <button onClick={toggle}>刷新子组件</button>
      </div>
      {show && children}
    </div>
  )
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
