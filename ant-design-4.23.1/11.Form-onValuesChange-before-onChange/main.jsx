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
  }
  const Show = () => {
    console.log('values', form.getFieldsValue())
  }
  function onChange(value) {
    console.log('onChange', value)
  }
  return (
    <div>
      <div>
        v4 的 Form, onValuesChange 先触发, 再出发 输入框的 onChange, 这样
        onChange拿到的是新值
      </div>
      <div style={{ width: '500px' }}>
        <Form form={form} onValuesChange={onValuesChange}>
          <FormItem label={LabelFixWidth('属性', '140px')} name="hallo">
            <Input onChange={onChange}></Input>
          </FormItem>
          <FormItem
            label={LabelFixWidth('身高属性比较长长长', '140px')}
            name="aa.bb"
          >
            <Input></Input>
          </FormItem>
          <FormItem label={LabelFixWidth('cc', '140px')} name="cc">
            <InputNumber onChange={onChange}></InputNumber>
          </FormItem>
          <FormItem label={LabelFixWidth('', '140px')} colon={false}>
            <Button onClick={Show}>显示</Button>
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
