import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'

import ContractInfo from './ContractInfo.jsx'
import LeaseRecognition from './LeaseRecognition.jsx'
import LinkRuleComputed from './LinkRuleComputed.jsx'


function App() {
  console.log('App render')
  return (
    <div>
      {/* <ContractInfo></ContractInfo> */}
      <LeaseRecognition></LeaseRecognition>
      {/* <LinkRuleComputed></LinkRuleComputed> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
