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
  ShowValues = () => {
    const { form } = this.props
    console.log(
      'Show values:',
      JSON.stringify(form.getFieldsValue(), null, ' ')
    )
  }
  set2 = () => {
    const { form } = this.props
    form.setFieldsValue({
      aa: '11',
      bb: '22',
    })
    console.log(
      'Show values:',
      JSON.stringify(form.getFieldsValue(), null, ' ')
    )
  }
  reset = () => {
    const { form } = this.props
    form.resetFields()
    console.log(
      'Show values:',
      JSON.stringify(form.getFieldsValue(), null, ' ')
    )
  }
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <FormItem label="aa">
          {getFieldDecorator('aa', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 'init a',
          })(<Input></Input>)}
        </FormItem>
        <FormItem label="bb">
          {getFieldDecorator('bb', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 'init b',
          })(<Input></Input>)}
        </FormItem>
        <FormItem>
          <Button onClick={this.ShowValues}>显示</Button>
          <Button onClick={this.set2}>set values</Button>
          <Button onClick={this.reset}>reset</Button>
        </FormItem>
      </Form>
    )
  }
}
const Sub1Form = Form.create({
  onValuesChange(props, changedValues, allValues) {
    const [key] = Object.keys(changedValues)
    console.log('onValuesChange start', key)
    if (key === 'aa') {
      // setFieldsValue 会触发 onValuesChange 执行
      // 如果这样需要避免无限循环调用
      props.form.setFieldsValue({ bb: 'bb22' })
    }
    console.log('onValuesChange done')
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
