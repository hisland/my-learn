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
  SetNoneDefField = () => {
    const { form } = this.props
    form.setFieldsValue({ cc: 'god' })
  }
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <div>{`cc 不存在, 不能 form.setFieldsValue({ cc: 'god' })`}</div>
        <FormItem label="bb">
          {getFieldDecorator('bb', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 'init b',
          })(<Input></Input>)}
        </FormItem>
        <FormItem>
          <Button onClick={this.SetNoneDefField}>set cc 报错</Button>
        </FormItem>
      </Form>
    )
  }
}
const Sub1Form = Form.create({
  onValuesChange(props, changedValues, allValues) {},
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
