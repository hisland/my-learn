const { createContext } = React

const Foo1Context = createContext()
const Foo2Context = createContext()

function App() {
  return (
    <Foo1Context.Provider value={'val1'}>
      <Foo2Context.Provider value={'test1'}>
        <Sub1></Sub1>
      </Foo2Context.Provider>
    </Foo1Context.Provider>
  )
}

function Sub1() {
  return (
    <Foo1Context.Consumer>
      {(val1) => (
        <Foo2Context.Consumer>
          {(val2) => (
            <div>
              2 个 context {val1} , {val2}
            </div>
          )}
        </Foo2Context.Consumer>
      )}
    </Foo1Context.Consumer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
