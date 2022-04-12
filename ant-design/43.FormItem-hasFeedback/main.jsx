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
import '@ant-design/compatible/assets/index.css'

const FormItem = Form.Item

class Sub1 extends Component {
  render() {
    const { form } = this.props
    console.log(this.props)
    const { getFieldDecorator } = form
    return (
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <FormItem label="明确租赁期限1" hasFeedback>
          {getFieldDecorator('leaseTermSign1', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 123,
          })(<Input allowClear></Input>)}
        </FormItem>
        <FormItem label="明确租赁期限2" hasFeedback>
          {getFieldDecorator('leaseTermSign2', {
            rules: [{ required: true, message: 'common.please.select' }],
          })(<DatePicker></DatePicker>)}
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
      <ul>
        <li>hasFeedback 右侧的图标</li>
        <li>DatePicker allowClear 的 x 和 hasFeedback 右侧的图标 重叠了</li>
      </ul>
      <Row>
        <Col span={12}>
          <Sub1Form></Sub1Form>
        </Col>
      </Row>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
