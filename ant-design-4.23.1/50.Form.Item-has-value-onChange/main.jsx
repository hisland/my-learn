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
  Radio,
  Switch,
  Checkbox,
  Row,
  Col,
  Tabs,
  Table,
  Form,
} from 'antd'

function App() {
  console.log('run App')

  const [form] = Form.useForm()

  function onValuesChange(changedValues, allValues) {
    console.log('onValuesChange()', changedValues, allValues)
  }

  async function DoSave() {
    console.log('DoSave()', form.getFieldsValue())
  }

  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <ul>
        <li>Form.Item 的 child, 自定义 value 没用</li>
        <li>Form.Item 的 child, 自定义 onChange 可以用</li>
      </ul>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item label="aa" name="aa">
          <Sub1>sub1-1</Sub1>
        </Form.Item>
        <Form.Item label="Sub1-has-value-onChange" name="cc">
          <Sub1
            value={99} // 这个 value 被忽略了
            // 这个 onChange 依然有用, 在 onValuesChange 之后触发
            onChange={(val) => {
              console.log('my-onChange', val)
            }}
          >
            sub1-2
          </Sub1>
        </Form.Item>
        <Form.Item
          label="change-valuePropName-trigger"
          name="bb"
          valuePropName="otherValue"
          trigger="otherChange"
        >
          <Sub1>sub1-3</Sub1>
        </Form.Item>

        <div>
          <Button onClick={DoSave}>form.getFieldsValue</Button>
        </div>
      </Form>
    </div>
  )
}

function Sub1(props) {
  console.log('props: ', props)
  return (
    <div>
      <div>
        <div>props.children: {props.children}</div>
        <div>props.value: {props.value}</div>
        <div>props.otherValue: {props.otherValue}</div>
      </div>
      <div>
        <button
          onClick={() => {
            props.onChange && props.onChange((props.value || 10) + 1)
            props.otherChange &&
              props.otherChange((props.otherValue || 100) + 10)
          }}
        >
          add 1
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
