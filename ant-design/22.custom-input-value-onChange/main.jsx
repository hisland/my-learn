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
  const onValuesChange = (changedValues, allValues) => {
    console.log('22', changedValues, allValues)
  }
  const Show = () => {
    console.log('values', JSON.stringify(form.getFieldsValue(), null, ' '))
  }

  const initialValues = {
    singleValue: '123',
    singleCheckbox: true,
    objectValue: {
      bb: 1,
      cc: 2,
    },
  }

  return (
    <div>
      <ul>
        <li>FormItem 通常把 value/onChange 传递给子组件</li>
        <li>
          FormItem 的 valuePropName 可以把 value 改成其它的名字, 比如 checked
        </li>
        <li>FormItem 的 对象值, 需要自己处理赋值逻辑</li>
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
          <FormItem label="对象 value/onChange" name="objectValue">
            <MyInputObject></MyInputObject>
          </FormItem>
          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={Show}>显示</Button>
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
function MyInputObject(props) {
  console.log('MyInputObject', props)
  const { value } = props
  const onChange = (key) => (ee) => {
    props.onChange({
      ...value,
      [key]: ee.target.value,
    })
  }
  return (
    <div>
      <Input value={value.bb} onChange={onChange('bb')}></Input>
      <Input value={value.cc} onChange={onChange('cc')}></Input>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
