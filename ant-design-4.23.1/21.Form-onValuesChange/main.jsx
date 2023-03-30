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
  Row,
  Col,
  Table,
  Form,
} from 'antd'

const FormItem = Form.Item

function App() {
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('22', changedValues, allValues)
  }
  const Show = () => {
    console.log('values', form.getFieldsValue())
  }
  return (
    <div>
      <ul>
        <li>onValuesChange 的调用</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="属性" name="aa">
            <Input></Input>
          </FormItem>
          <FormItem label="身高属性比较长长长" name="bb">
            <Input></Input>
          </FormItem>
          <FormItem label="cc" name="cc">
            <InputNumber></InputNumber>
          </FormItem>
          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={Show}>显示</Button>
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
