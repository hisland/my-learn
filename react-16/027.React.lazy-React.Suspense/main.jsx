import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Sub2 = React.lazy(() => {
  return new Promise((resolve) => {
    import('./sub.jsx').then((rs) => {
      console.log('loaded:', rs.default)
      setTimeout(resolve, 1000, rs)
    })
  })
})

function App() {
  console.log('App render')

  return <Sub1></Sub1>
}

function Sub1() {
  console.log('Sub1 render')

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
