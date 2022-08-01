import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useCallback } from 'react'
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

function App() {
  console.log('App render')

  const [list] = useState([
    { value: 11, name: 'label11', other1: 'val1', other2: 'val2' },
    { value: 12, name: 'label12', other1: 'val1', other2: 'val2' },
    { value: 13, name: 'label13', other1: 'val1', other2: 'val2' },
    { value: 14, name: 'label14', other1: 'val1', other2: 'val2' },
  ])

  return (
    <div>
      <ul>
        <li>Select.Option 只传入 key, 会被内部设置为 value</li>
        <li>
          labelInValue 只能补充 value,key,label,disabled, 并不会把循环的 list
          的对象设置为 onChange 的值
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Select
          labelInValue
          style={{ width: '300px' }}
          onChange={(ee) => {
            console.log('ee1: ', ee)
          }}
        >
          {list.map((vv) => {
            console.log('vv: ', vv)
            return <Select.Option key={vv.value}>{vv.name}</Select.Option>
          })}
        </Select>
        <Select
          style={{ width: '300px' }}
          onChange={(ee) => {
            console.log('ee2: ', ee)
          }}
        >
          {list.map((vv) => {
            console.log('vv: ', vv)
            return <Select.Option key={vv.value}>{vv.name}</Select.Option>
          })}
        </Select>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
