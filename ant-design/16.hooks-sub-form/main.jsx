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

  const subForms = {}
  function pushForm(name, form) {
    subForms[name] = form
    console.log(11, form, subForms)
  }

  async function DoSave() {
    console.log(11, subForms)

    let currentTab
    const forms = Object.entries(subForms)
    try {
      for (const [key, form] of forms) {
        console.log(key, form)
        currentTab = key
        console.log('rs:', await form.validateFields())
      }
    } catch (error) {
      console.log('err:', currentTab, error)
    }
  }

  const [activeKey, SetTab] = useState('sub1')

  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <Tabs activeKey={activeKey} onChange={SetTab}>
        <TabPane tab="sub1" key="sub1">
          <Sub1 pushForm={(form) => pushForm('sub1', form)}></Sub1>
        </TabPane>
        <TabPane tab="sub2" key="sub2">
          <Sub2 pushForm={(form) => pushForm('sub2', form)}></Sub2>
        </TabPane>
      </Tabs>

      <Button onClick={DoSave}>确定</Button>
    </div>
  )
}

function Sub1({ pushForm }) {
  console.log('run Sub1')
  const [form] = Form.useForm()
  pushForm(form)

  const [isRquired, setRequired] = useState(false)
  function onValuesChange(changedValues, allValues) {
    console.log(11, changedValues)
  }
  return (
    <Form form={form} onValuesChange={onValuesChange}>
      <FormItem
        label="属性aa"
        name="aa"
        rules={[{ required: isRquired, message: '必填' }]}
      >
        <Input></Input>
      </FormItem>
      <FormItem label="是的">
        <Switch onChange={setRequired}></Switch>
      </FormItem>
    </Form>
  )
}

function Sub2({ pushForm }) {
  console.log('run Sub2')
  const [form] = Form.useForm()
  pushForm(form)

  const [isRquired, setRequired] = useState(false)
  function onValuesChange(changedValues, allValues) {
    console.log(11, changedValues)
  }
  return (
    <Form form={form} onValuesChange={onValuesChange}>
      <FormItem
        label="属性bb"
        name="bb"
        rules={[{ required: isRquired, message: '必填' }]}
      >
        <Input></Input>
      </FormItem>
      <FormItem label="是的">
        <Switch onChange={setRequired}></Switch>
      </FormItem>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
