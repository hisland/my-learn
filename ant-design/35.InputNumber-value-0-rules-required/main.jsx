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
} from 'antd'

const FormItem = Form.Item

function App() {
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('onValuesChange', changedValues, allValues)
  }

  async function DoSubmit() {
    form
      .validateFields()
      .then((values) => {
        console.log('values: ', values)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }

  const initialValues = {
    value1: 1,
  }

  console.log('App render')

  return (
    <div>
      <ul>
        <li>InputNumber value 0</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem
            label="value1"
            name="value1"
            rules={[{ required: true, message: 'haha' }]}
          >
            <InputNumber min={0} max={33} precision={0} />
          </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={DoSubmit}>Submit</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
