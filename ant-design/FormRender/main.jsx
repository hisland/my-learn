import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import TestContractInfo from './TestContractInfo.jsx'
import TestLeaseRecognition from './TestLeaseRecognition.jsx'
import TestLinkRuleComputed from './TestLinkRuleComputed.jsx'

function App() {
  console.log('App render')
  return (
    <div>
      <TestContractInfo></TestContractInfo>
      {/* <TestLeaseRecognition></TestLeaseRecognition> */}
      {/* <TestLinkRuleComputed></TestLinkRuleComputed> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
