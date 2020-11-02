import React, { useState } from 'react'
import { connect } from 'dva'

function FooPage(props) {
  console.log('FooPage render', props)
  const [bar, set_bar] = useState('init')
  const { foo } = props
  return (
    <div>
      <h2>切换路由的时候, hooks 的状态消失了, model 的状态还在</h2>
      <div>bar {bar}</div>
      <div>foo {foo.some}</div>
      <div>foo {foo.count}</div>
      <div>
        <button
          onClick={() => {
            set_bar(Math.random().toString(36).substr(2, 5))
          }}
        >
          set_bar
        </button>
        <button
          onClick={() => {
            props.dispatch({
              type: 'foo/asyncSetSome',
              payload: Math.random().toString(36),
            })
          }}
        >
          asyncSetSome
        </button>
        <button
          onClick={() => {
            props.dispatch({
              type: 'foo/setSome',
              payload: Math.random().toString(36),
            })
          }}
        >
          setSome
        </button>
        <button
          onClick={() => {
            props.dispatch({ type: 'foo/inc' })
          }}
        >
          inc
        </button>
        <button
          onClick={() => {
            props.dispatch({ type: 'foo/dec' })
          }}
        >
          dec
        </button>
      </div>
    </div>
  )
}

FooPage.propTypes = {}

export default connect((state) => {
  return {
    foo: state.foo,
  }
})(FooPage)
