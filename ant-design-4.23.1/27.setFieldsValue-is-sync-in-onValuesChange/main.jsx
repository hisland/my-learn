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
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('onValuesChange', changedValues, allValues)
    console.log(
      'onValuesChange before:',
      JSON.stringify(form.getFieldsValue(), null, ' ')
    )
    form.setFieldsValue({
      aa: 3,
      bb: 4,
      cc: 5,
    })
    console.log(
      'onValuesChange after:',
      JSON.stringify(form.getFieldsValue(), null, ' ')
    )
  }
  const Show = () => {
    console.log(
      'Show all values:',
      JSON.stringify(form.getFieldsValue(true), null, ' ')
    )
  }
  function onInputChange(value) {
    console.log(
      'onInputChange values:',
      value,
      'all values',
      JSON.stringify(form.getFieldsValue(true), null, ' ')
    )
  }
  function SetNoneDefField() {
    form.setFieldsValue({ dd: 'god' })
  }
  return (
    <div>
      <ul>
        <li>
          v4 的 setFieldsValue 是同步执行的, onValuesChange 里面直接
          setFieldsValue, 立即更新
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="属性" name="aa" initialValue="some aa">
            <Input onChange={onInputChange}></Input>
          </FormItem>
          <FormItem label="身高属性比较长长长" name="bb">
            <Input></Input>
          </FormItem>
          <FormItem label="cc" name="cc">
            <InputNumber onChange={onInputChange}></InputNumber>
          </FormItem>
          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={Show}>显示</Button>
            <Button onClick={SetNoneDefField}>
              设置 没有FormItem的dd 不报错
            </Button>
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

function LabelFixWidth(label = '', width = '80px') {
  return <div style={{ width }}>{label}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
