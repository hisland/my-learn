import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import { Button } from 'antd'
import { Input } from 'antd'
import { Switch, Checkbox } from 'antd'
import { Drawer } from 'antd'
import { Table } from 'antd'
import { Form } from 'antd'
import { Row, Col } from 'antd'

const FormItem = Form.Item

import EditFormUse from './EditFormUse.jsx'
import Test from './Test.jsx'
import Test2 from './Test2.jsx'
import Test3 from './Test3.jsx'

function App() {
  console.log(33)
  return (
    <div style={{ margin: '20px', background: 'pink' }}>
      {/* <EditFormUse></EditFormUse> */}
      {/* <Test></Test> */}
      {/* <Test2></Test2> */}
      <div style={{ padding: '20px', width: '500px', background: '#fff' }}>
        <Test3></Test3>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
