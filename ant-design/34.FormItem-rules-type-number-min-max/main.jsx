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
  const SetValue = () => {
    const val1 = Math.random().toString(36).substr(2, 8)
    form.setFieldsValue({ value1: val1 })
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
        <li>
          <span>rules 的 min/max 必须设置 type</span>
          <a href="https://ant.design/components/form-cn/#Rule">
            https://ant.design/components/form-cn/#Rule
          </a>
        </li>
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
            rules={[
              { type: 'number', min: 0, message: 'min is 0' },
              { type: 'number', max: 10, message: 'max is 10' },
            ]}
          >
            <InputNumber></InputNumber>
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
