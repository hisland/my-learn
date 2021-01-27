const { useState, createContext } = React

function App() {
  return (
    <div>
      <Sub1>
        <div>some 1 多个 children 是数组</div>
        <div>some 2 多个 children 是数组</div>
      </Sub1>
      <hr />
      <Sub1>
        <div>some 1 单个 children 是对象</div>
      </Sub1>
      <hr />
      <Sub1></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log(props.children)
  return (
    <div>
      <div>{props.children || '没有 children 是 undefined'}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
