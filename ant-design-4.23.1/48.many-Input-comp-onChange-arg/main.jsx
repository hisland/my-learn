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
        <li>Switch 直接是 true/false</li>
        <li>Select 是 Option 的 value</li>
        <li>Input 是 合成事件 ee, ee.target.value 才是 Input 的值</li>
        <li>Radio.Group 是 合成事件 ee, ee.target.value 才是 Radio 的值</li>
        <li>Checkbox 是 合成事件 ee, ee.target.value 才是 Checkbox 的值</li>
        <li>DatePicker onChange 得到 moment 实例</li>
      </ul>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item label="Input" name="aa">
          <Input
            onChange={(ee) => {
              console.log(ee)
            }}
          ></Input>
        </Form.Item>
        <Form.Item label="Switch" name="bb" valuePropName="checked">
          <Switch
            onChange={(ee) => {
              console.log(ee)
            }}
          ></Switch>
        </Form.Item>
        <Form.Item label="Select" name="cc">
          <Select
            onChange={(ee) => {
              console.log(ee)
            }}
          >
            <Select.Option value={12}>12</Select.Option>
            <Select.Option value={34}>34</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Radio.Group" name="dd">
          <Radio.Group
            onChange={(ee) => {
              console.log(ee)
            }}
          >
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={{ foo: 3 }}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Checkbox" name="ee" valuePropName="checked">
          <Checkbox
            onChange={(ee) => {
              console.log(ee)
            }}
          >
            Checkbox
          </Checkbox>
        </Form.Item>
        <Form.Item label="DatePicker" name="ff">
          <DatePicker
            onChange={(ee) => {
              console.log(ee)
            }}
          />
        </Form.Item>

        <div>
          <Button onClick={DoSave}>确定</Button>
        </div>
      </Form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
