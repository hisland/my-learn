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
} from 'antd'
import { Form } from '@ant-design/compatible'

const FormItem = Form.Item

class Sub1 extends Component {
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form>
        <FormItem label="明确租赁期限">
          {getFieldDecorator('leaseTermSign', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 123,
          })(<Input></Input>)}
        </FormItem>
        <FormItem label="明确租赁期限2">
          {getFieldDecorator('timeBegin', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: null,
          })(<DatePicker inputReadOnly />)}
        </FormItem>
      </Form>
    )
  }
}
const Sub1Form = Form.create({
  onValuesChange(props, changedValues, allValues) {
    console.log(
      'onValuesChange',
      changedValues,
      changedValues.timeBegin && changedValues.timeBegin.format()
    )
    const values = props.form.getFieldsValue()
    console.log('raw', JSON.stringify(values))
  },
})(Sub1)

function App() {
  console.log('run App')

  return (
    <div>
      <Sub1Form></Sub1Form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
