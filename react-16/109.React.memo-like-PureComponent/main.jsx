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
          <li>
            React.memo 不传 propsAreEqual 对比函数的时候 类似 PureComponent
          </li>
          <li>它只比较 props 的变化, 不管 state</li>
          <li>
            注意内联的 ref 匿名函数是每次创建的, 会导致它一直渲染, 如第 1
            个示例, 这点和 PureComponent 略有不同
          </li>
        </ul>

        <div>
          <div>App foo: {JSON.stringify(foo)}</div>
          <button onClick={this.setAppFooSame}>setAppFooSame</button>
          <button onClick={this.setAppFooNew}>setAppFooNew</button>
          <button onClick={this.forceRender('sub1')}>forceRender 1</button>
          <Sub1 ref={(ref) => (this.sub1 = ref)}></Sub1>
          <Sub1 propDontChange={33}></Sub1>
          <Sub1 propChange={foo}></Sub1>
        </div>
      </div>
    )
  }
}

const Sub1 = React.memo(
  class extends Component {
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
)

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
