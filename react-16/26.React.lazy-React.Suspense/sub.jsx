import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function (props) {
  console.log('Sub2 render')

  const [foo, setFoo] = useState(1)

  return (
    <div>
      <button
        onClick={() => {
          setFoo(foo + 1)
        }}
      >
        setFoo {foo}
      </button>
    </div>
  )
}
