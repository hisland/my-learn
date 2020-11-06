const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState({ god: 'aa' })
  function Inc1() {
    foo.some = Math.random().toString(36)
    setFoo(foo)
  }
  function Inc2() {
    foo.some = Math.random().toString(36)
    setFoo({ ...foo })
  }

  return (
    <div>
      <ul>
        <li>setFoo(foo), 因为引用没变, 即使 foo.xxx 变化了, 也不会重新渲染</li>
        <li>{'{ ...foo }'} 使用这样的展开运算符来处理</li>
      </ul>
      <div>
        <button onClick={Inc1}>Inc1</button>
        <button onClick={Inc2}>Inc2</button>
      </div>
      <div>foo: {JSON.stringify(foo)}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
