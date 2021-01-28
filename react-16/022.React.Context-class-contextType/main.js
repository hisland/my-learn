const { createContext } = React

const SomeVar = createContext('defaultValue')

function App() {
  return (
    <SomeVar.Provider value="newValue">
      <Sub1></Sub1>
    </SomeVar.Provider>
  )
}

function Sub1() {
  return (
    <React.Fragment>
      <Sub2></Sub2>
      <SomeVar.Provider value={{ foo: 'override to object' }}>
        <Sub2></Sub2>
      </SomeVar.Provider>
      <Sub3></Sub3>
    </React.Fragment>
  )
}

// class 静态属性语法
class Sub2 extends React.Component {
  static contextType = SomeVar
  render() {
    return <div>{this.context.foo || this.context}</div>
  }
}

// js原型对象语法
class Sub3 extends React.Component {
  render() {
    return <div>Sub3:{this.context}</div>
  }
}
Sub3.contextType = SomeVar

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
