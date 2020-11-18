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
    console.log('onValuesChange:', changedValues, allValues)
  }
  const ShowCurrentValue = () => {
    console.log('values', JSON.stringify(form.getFieldsValue(), null, ' '))
  }
  const SetValues = () => {
    form.setFieldsValue({
      singleValue: Math.random().toString(36).substr(2),
      singleCheckbox: Math.random() > 0.5,
    })
  }

  const initialValues = {
    singleValue: '123',
    singleCheckbox: true,
  }

  return (
    <div>
      <ul>
        <li>form.setFieldsValue 不会触发 form 的 onValuesChange</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="单值 value/onChange" name="singleValue">
            <MyInputSingleValue></MyInputSingleValue>
          </FormItem>
          <FormItem
            label="单值 checked/onChange"
            name="singleCheckbox"
            valuePropName="checked"
          >
            <MyInputCheckbox></MyInputCheckbox>
          </FormItem>
          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={ShowCurrentValue}>显示当前值</Button>
            <Button onClick={SetValues}>随机设置</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

function MyInputSingleValue(props) {
  console.log('MyInputSingleValue', props)
  return (
    <div>
      <Input value={props.value} onChange={props.onChange}></Input>
    </div>
  )
}
function MyInputCheckbox(props) {
  console.log('MyInputCheckbox', props)
  return (
    <div>
      <Checkbox checked={props.checked} onChange={props.onChange}></Checkbox>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
