import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { foo: { bar: 1 } }
    console.log('App constructor')
  }
  setAppFooSame = () => {
    const { foo } = this.state
    foo.bar += 1
    this.setState({ foo }) // 旧对象, 引用相同
  }
  setAppFooNew = () => {
    const { foo } = this.state
    foo.bar += 1
    this.setState({ foo: { ...foo } }) // 新对象, 引用不同
  }
  forceRender = (ref) => () => {
    this[ref].forceUpdate()
  }
  render() {
    console.log('App render')
    const { foo } = this.state
    return (
      <div>
        <ul>
          <li>通过 ref 引用, 调用 forceUpdate() 强制 render</li>
          <li>当 prop 或者 state 是嵌套对象的时候, PureComponent 并不能检测</li>
          <li>
            PureComponent implements it with a shallow prop and state comparison
          </li>
          <li>
            这里 ref 参数其实每次都是新创建的函数, 但是判断成相同的了没有刷新,
            这和 React.memo 不一样
          </li>
        </ul>

        <div>
          <div>App foo: {JSON.stringify(foo)}</div>
          <button onClick={this.setAppFooSame}>setAppFooSame</button>
          <button onClick={this.setAppFooNew}>setAppFooNew</button>
          <button onClick={this.forceRender('sub1')}>forceRender 1</button>
          <button onClick={this.forceRender('sub2')}>forceRender 2</button>
          <button onClick={this.forceRender('sub3')}>forceRender 3</button>
          <Sub1 ref={(ref) => (this.sub1 = ref)}></Sub1>
          <Sub1 ref={(ref) => (this.sub2 = ref)} propDontChange={33}></Sub1>
          <Sub1 ref={(ref) => (this.sub3 = ref)} propChange={foo}></Sub1>
        </div>
      </div>
    )
  }
}

class Sub1 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { foo: 1, rnd: Math.random().toString(36).substr(2, 8) }
    console.log('Sub1 constructor')
  }
  setSubFoo = () => {
    const { foo } = this.state
    if (Math.random() < 0.5) {
      this.setState({ foo: foo + 1 })
    } else {
      console.log('dont change foo, no re-render')
    }
  }
  render() {
    const { foo, rnd } = this.state
    console.log('Sub1 render', rnd)
    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1 foo: {foo}</div>
          <div>Sub1 rnd id: {rnd}</div>
          <div>Sub1 props: {JSON.stringify(this.props)}</div>
          <button onClick={this.setSubFoo}>setSubFoo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
