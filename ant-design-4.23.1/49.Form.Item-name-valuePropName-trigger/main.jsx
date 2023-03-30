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
    // console.log(11, changedValues, allValues)
  }

  async function DoSave() {
    console.log(22, 'save', form.getFieldsValue())
  }

  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <ul>
        <li>
          Form.Item 有 name 的时候, 只能有一个 child, 并且会被添加
          id/value/onChange 等 props
        </li>
        <li>Form.Item 没有 name, 则什么都不添加, 也可以是多个 children</li>
      </ul>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item label="Input" name="aa">
          <Sub1>有 name, 只能一个</Sub1>
        </Form.Item>
        <Form.Item
          label="Input"
          name="bb"
          valuePropName="otherValue"
          trigger="otherChange"
        >
          <Sub1>有 name, 只能一个, 指定 valuePropName, trigger</Sub1>
        </Form.Item>

        <Form.Item label="Input">
          <Sub1>无 name, 可以多个</Sub1>
          <Sub1>无 name, 可以多个</Sub1>
        </Form.Item>

        <div>
          <Button onClick={DoSave}>确定</Button>
        </div>
      </Form>
    </div>
  )
}

function Sub1(props) {
  console.log('props: ', props)
  return <div>{props.children}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
