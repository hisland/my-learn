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

function App() {
  console.log('run App')

  const [form] = Form.useForm()

  function onValuesChange(changedValues, allValues) {
    console.log(11, changedValues, allValues)
  }

  async function DoSave() {
    console.log(22, 'save', form.getFieldsValue())
  }

  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <h2>FormItem 是各种后代组件里面, 都能绑定到最顶层的 Form 上</h2>
      <Form form={form} onValuesChange={onValuesChange}>
        <FormItem
          label="属性aa"
          name="aa"
          rules={[{ required: true, message: '必填' }]}
        >
          <Input></Input>
        </FormItem>

        <Sub1>
          <FormItem label="是的bb" name="bb">
            <Switch></Switch>
          </FormItem>
        </Sub1>

        <Sub2>
          <FormItem label="是的dd" name="dd">
            <Switch></Switch>
          </FormItem>
        </Sub2>

        <div>
          <Button onClick={DoSave}>确定</Button>
        </div>
      </Form>
    </div>
  )
}

function Sub1({ children }) {
  console.log('run Sub1')
  return (
    <>
      <FormItem label="是的cc" name="cc">
        <Switch></Switch>
      </FormItem>
      {children}
      <Sub2>
        <FormItem label="是的ee" name="ee">
          <Switch></Switch>
        </FormItem>
      </Sub2>
    </>
  )
}

function Sub2({ children }) {
  console.log('run Sub2')
  return <div>{children}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
