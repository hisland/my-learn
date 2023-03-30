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
    console.log('22', changedValues, allValues)
  }
  const Show = () => {
    console.log('values', JSON.stringify(form.getFieldsValue(true), null, ' '))
  }

  const initialValues = {
    value1: 123,
    value2: 456,
  }

  return (
    <div>
      <ul>
        <li>勉强能用, 只是不能触发 Form 的 onValuesChange</li>
        <li>
          必须要 form.getFieldsValue(true) 才能取得全部值, 因为没有 FormItem
          创建 Field
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <HocMultiValueFormItem
            label="测试"
            form={form}
            valuesMap={{ value1: 'bb', value2: 'cc' }}
          >
            <MyInputObject></MyInputObject>
          </HocMultiValueFormItem>
          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={Show}>显示</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

function HocMultiValueFormItem(props) {
  console.log('HocMultiValueFormItem', props)
  const [, forceRender] = useState({})

  const { form, valuesMap, children, ...restProps } = props
  const pairs = Object.entries(valuesMap)

  const onChange = (obj) => {
    const values = {}
    for (const [formKey, dataKey] of pairs) {
      values[formKey] = obj[dataKey]
    }
    form.setFieldsValue(values)
    forceRender({})
  }

  const value = {}
  for (const [formKey, dataKey] of pairs) {
    const val = form.getFieldValue(formKey)
    value[dataKey] = val
  }
  return (
    <FormItem {...restProps}>
      {React.cloneElement(children, {
        value,
        onChange,
      })}
    </FormItem>
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
