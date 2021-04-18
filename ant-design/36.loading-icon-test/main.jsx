import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import {
  Popover,
  Button,
  Drawer,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Checkbox,
  Switch,
  Row,
  Col,
  Table,
  Form,
  Upload,
} from 'antd'

const FormItem = Form.Item

function App() {
  console.log('App render')

  const [loading, set_loading] = useState(false)

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <div style={{ width: '500px' }}>
        <Button
          onClick={() => {
            set_loading(!loading)
          }}
          loading={loading}
        >
          Toggle
        </Button>
        <Button
          onClick={() => {
            set_loading(!loading)
          }}
        >
          Toggle
        </Button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
