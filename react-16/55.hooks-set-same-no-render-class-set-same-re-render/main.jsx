const { useState } = React

function App() {
  console.log('App render')

  return (
    <div>
      <Sub1></Sub1>
      <Sub2></Sub2>
    </div>
  )
}

function Sub1() {
  console.log('Sub1 render')

  const [count, set_count] = useState({ some: 'value' })
  const [normal, set_normal] = useState('normal')
  function SetSame1() {
    set_count(count)
  }
  function SetSame2() {
    set_normal(normal)
  }

  return (
    <div style={{ padding: '10px', border: '1px solid green' }}>
      <ul>
        <li>hooks 设置相同的对象, 不触发 render</li>
        <li>hooks 设置相同的原始值, 不触发 render</li>
      </ul>
      <button onClick={SetSame1}>set_count {count.some}</button>
      <button onClick={SetSame2}>set_normal {normal}</button>
    </div>
  )
}

class Sub2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: { some: 'value' },
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
  SetSame1 = () => {
    this.setState({
      foo: this.state.foo,
    })
  }
  SetSame2 = () => {
    this.setState({
      normal: 'normal',
    })
  }
  render() {
    console.log('Sub2 render')
    return (
      <div style={{ padding: '10px', border: '1px solid red' }}>
        <ul>
          <li>
            class 设置相同的对象, <strong>触发 render</strong>
          </li>
          <li>
            class 设置相同的原始值, <strong>触发 render</strong>
          </li>
        </ul>
        <button onClick={this.SetSame1}>SetSame {this.state.foo.some}</button>
        <button onClick={this.SetSame2}>SetSame {this.state.normal}</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
