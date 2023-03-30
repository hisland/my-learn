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
  constructor(props) {
    super(props)
    this.state = {
      record: {
        foo: 123,
      },
    }
  }
  render() {
    const { record } = this.state
    const { form } = this.props
    const { getFieldDecorator } = form

    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 12 },
    }

    return (
      <Row>
        <Col span={24}>
          <ul>
            <li>
              initialValue 的值随时可以变化, 这样 resetFields 的时候,
              会把它赋值给相应的属性
            </li>
            <li>输入的值和 initialValue 与不干扰</li>
          </ul>
        </Col>
        <Col span={12}>
          <Form {...formItemLayout}>
            <FormItem label="输入框">
              {getFieldDecorator('foo', {
                rules: [{ required: true, message: 'common.please.select' }],
                initialValue: record.foo,
              })(<Input></Input>)}
            </FormItem>
            <FormItem label="操作">
              <Button
                onClick={() => {
                  console.log(form.getFieldsValue())
                }}
              >
                显示
              </Button>
              <Button
                onClick={() => {
                  form.resetFields()
                }}
              >
                重置
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    record: {
                      foo: Math.random().toString(36).substring(2),
                    },
                  })
                }}
              >
                random initialValue
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
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
