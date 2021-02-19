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
} from 'antd'

const FormItem = Form.Item

function App() {
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('onValuesChange', changedValues, allValues)
  }
  const SetValue = () => {
    const val1 = Math.random().toString(36).substr(2, 8)
    form.setFieldsValue({ value1: val1 })
    console.log('get1:', val1, form.getFieldValue('value1'))
    const val2 = Math.random().toString(36).substr(2, 8)
    form.setFieldsValue({ value1: val2 })
    console.log('get2:', val2, form.getFieldValue('value1'))
  }

  const initialValues = {
    value1: 1,
  }

  console.log('App render')

  return (
    <div>
      <ul>
        <li>setFieldsValue 之后马上 getFieldsValue 能拿到最新值, 操作是同步的</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="value1 init 存在" name="value1">
            <Input></Input>
          </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={SetValue}>额外添加属性</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
