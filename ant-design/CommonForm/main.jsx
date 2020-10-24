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

function App() {
  console.log(33)
  return (
    <div style={{ width: '1000px', padding: '20px' }}>
      {/* <EditFormUse></EditFormUse> */}
      <Test></Test>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
