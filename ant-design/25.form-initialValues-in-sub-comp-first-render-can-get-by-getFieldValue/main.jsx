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
  console.log('App render')

  const [form] = Form.useForm()

  window.kkk = form

  const obj = {
    aa: 123,
  }

  return (
    <div>
      <ul>
        <li>
          form 的 initialValues, 初次渲染子节点时, form.getFieldValue 便能取到了
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form form={form} initialValues={obj}>
          <Sub form={form}></Sub>
        </Form>
      </div>
    </div>
  )
}

function Sub(props) {
  console.log('Sub render', props.form.getFieldValue('aa'))

  return (
    <FormItem label="属性" name="aa">
      <Input></Input>
    </FormItem>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
