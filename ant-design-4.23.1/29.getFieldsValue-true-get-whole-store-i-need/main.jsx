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
  const onFinish = (values) => {
    console.log('getFieldsValue:', values)
  }
  const getFieldsValue = () => {
    console.log('getFieldsValue:', form.getFieldsValue())
  }
  const getFieldsValueStore = () => {
    console.log('getFieldsValueStore:', form.getFieldsValue(true))
  }
  const getFieldValue = () => {
    for (let ii = 1; ii < 7; ii++) {
      const key = 'value' + ii
      console.log('getFieldValue: ' + key, form.getFieldValue(key))
    }
  }
  const SetValue = () => {
    const obj = {
      value5: Math.random().toString(36).substr(2, 3),
      value6: Math.random().toString(36).substr(2, 3),
    }
    console.log('Set 不存在:', obj)
    form.setFieldsValue(obj)
  }

  const initialValues = {
    value1: 1,
    value2: 2,
    value3: 3,
  }

  return (
    <div>
      <ul>
        <li>getFieldsValue 并不如想象的拿到所有数据的并集</li>
        <li>onValuesChange 的 allValues 才是我想要的</li>
        <li>getFieldsValue(true) 才是我想要的</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="value3 init 存在" name="value3">
            <Input></Input>
          </FormItem>
          <FormItem label="value4 init 不存在" name="value4">
            <Input></Input>
          </FormItem>
          <FormItem label="value5 init 不存在" name="value5">
            <Input></Input>
          </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={getFieldsValue}>
              getFieldsValue 只能拿到 FormItem 指定了 item-name 的对象
            </Button>
            <Button onClick={getFieldsValueStore}>
              getFieldsValue(true) 拿到init/item-name的整个对象
            </Button>
            <Button onClick={getFieldValue}>
              getFieldValue: 指定 name, 能拿到 init/item-name指定,以及额外添加的任意属性值
            </Button>
            <Button onClick={SetValue}>额外添加属性</Button>
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
