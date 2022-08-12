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
  Spin,
} from 'antd'

const FormItem = Form.Item

function App() {
  console.log('App render')

  const [foo, set_foo] = useState(null)

  return (
    <div style={{ padding: '100px' }}>
      <div>
        <Popover content={123}>
          <span>Popover 正常打开</span>
        </Popover>
      </div>
      <div>
        <Button type="link">
          <Popover content={456}>
            antd3 Button套Popover 打不开, antd4 正常打开
          </Popover>
        </Button>
      </div>
      <div>
        <Popover content={456}>
          <Button type="link">Popover套Button antd3/4 正常打开</Button>
        </Popover>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
