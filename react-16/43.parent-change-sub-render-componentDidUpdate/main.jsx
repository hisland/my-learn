const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(true)

  console.log('App Sub before')
  const sub2 = <Sub2></Sub2>
  console.log('App Sub after')

  return (
    <div>
      <ul>
        <li>App render, 导致下级组件 render 和 componentDidUpdate</li>
        <li>
          componentDidMount 是从 <strong>末级 -> 上</strong> 触发
        </li>
        <li>
          componentDidUpdate 是从 <strong>末级 -> 上</strong> 触发
        </li>
      </ul>
      <div>
        <button onClick={() => setFoo(!foo)}>setFoo</button>
      </div>
      <div>{sub2}</div>
    </div>
  )
}

class Sub2 extends React.Component {
  constructor(props) {
    super(props)
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
    return <Sub3></Sub3>
  }
}

class Sub3 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Sub3 constructor')
  }
  componentDidMount() {
    console.log('Sub3 componentDidMount')
  }
  componentDidUpdate() {
    console.log('Sub3 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Sub3 componentWillUnmount')
  }
  render() {
    console.log('Sub3 render')
    return <Sub4></Sub4>
  }
}

class Sub4 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Sub4 constructor')
  }
  componentDidMount() {
    console.log('Sub4 componentDidMount')
  }
  componentDidUpdate() {
    console.log('Sub4 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Sub4 componentWillUnmount')
  }
  render() {
    console.log('Sub4 render')
    return <div>Sub4</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
