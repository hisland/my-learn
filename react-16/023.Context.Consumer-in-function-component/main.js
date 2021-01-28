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
    </React.Fragment>
  )
}

function Sub2() {
  return (
    <SomeVar.Consumer>
      {(value) => (
        <div>
          <div>注意 Context.Consumer 的子节点是一个 函数</div>
          <div>{value.foo || value}</div>
        </div>
      )}
    </SomeVar.Consumer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
