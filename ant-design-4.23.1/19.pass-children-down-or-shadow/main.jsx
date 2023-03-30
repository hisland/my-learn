import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import {
  Button,
  Drawer,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Switch,
  Checkbox,
  Row,
  Col,
  Tabs,
  Table,
  Form,
} from 'antd'

const { TabPane } = Tabs
const FormItem = Form.Item

function App(props) {
  console.log('run App', props)
  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <div>app</div>
      <Sub1 some="var">value from app</Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('run Sub1', props)
  return (
    <div>
      <div>Sub1</div>
      <div style={{ borderTop: '1px solid red' }}>
        下面这个传了 children, 上级给的 children 消失了, 应该是属性合并的时候,
        本级 children 在后面把前面覆盖了
      </div>
      <Sub2 {...props} id="sub2-1">
        value from Sub1
      </Sub2>
      <div style={{ borderTop: '1px solid red' }}>
        下面这个由于没有传 children, 是通过 props 传递的上级给的 children
      </div>
      <Sub2 {...props} id="sub2-2"></Sub2>
    </div>
  )
}

function Sub2(props) {
  console.log('run Sub2', props)
  return (
    <div>
      <div>Sub2</div>
      <div>{props.children}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
