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
  const Show = () => {
    console.log('values:', JSON.stringify(form.getFieldsValue(), null, ' '))
  }
  function onChange(value) {
    console.log('values:', JSON.stringify(form.getFieldsValue(), null, ' '))
  }
  function shouldUpdate(prevValues, curValues) {
    console.log('shouldUpdate', prevValues, curValues)
  }
  return (
    <div>
      <ul>
        <li>rules 是个函数</li>
        <li>children 也是个函数</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="属性" name="aa">
            <Input onChange={onChange}></Input>
          </FormItem>
          <FormItem label="启用" name="bb" valuePropName="checked">
            <Switch></Switch>
          </FormItem>

          <FormItem
            label="rules-function"
            name="cc"
            dependencies={['aa']}
            rules={[
              (form) => {
                console.log(
                  'cc:',
                  JSON.stringify(form.getFieldsValue(), null, ' ')
                )
                return {
                  required: form.getFieldValue('aa') === '33',
                  message: '请选择',
                }
              },
            ]}
          >
            <Input></Input>
          </FormItem>

          <FormItem label="children-function" dependencies={['bb']}>
            {(form) => {
              console.log(
                'dd:',
                JSON.stringify(form.getFieldsValue(), null, ' ')
              )
              return (
                <FormItem name="dd">
                  <Input disabled={form.getFieldValue('bb')}></Input>
                </FormItem>
              )
            }}
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
