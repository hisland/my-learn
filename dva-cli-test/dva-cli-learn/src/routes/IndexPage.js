import React from 'react'
import { connect } from 'dva'

function IndexPage(props) {
  console.log('IndexPage render', props)
  const { example } = props
  return (
    <div>
      <pre>index {JSON.stringify(example, null, ' ')}</pre>
      <div>
        <button
          onClick={() => {
            props.dispatch({
              type: 'example/save',
              payload: {
                any: Math.random().toString(36),
              },
            })
          }}
        >
          save any
        </button>
        <button
          onClick={() => {
            props.dispatch({
              type: 'example/save',
              payload: {
                other: Math.random().toString(36).substr(2, 7),
                more: Math.random().toString(36).substr(2, 4),
              },
            })
          }}
        >
          save other&more
        </button>
      </div>
    </div>
  )
}

IndexPage.propTypes = {}

export default connect(({ example }) => ({ example }))(IndexPage)
