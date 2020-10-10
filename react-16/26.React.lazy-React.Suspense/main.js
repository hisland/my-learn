const { useState, createContext } = React

const Sub2 = React.lazy(() => import('./sub.js'))

function App() {
  return <Sub1></Sub1>
}

function Sub1() {
  const [Show, setShow] = useState(false)
  return (
    <div>
      <div>
        {Show ? (
          <React.Suspense fallback={<div>加载中...</div>}>
            <Sub2></Sub2>
          </React.Suspense>
        ) : (
          <div>hide</div>
        )}
      </div>
      <div>
        <button onClick={() => setShow(!Show)}>toggle</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
