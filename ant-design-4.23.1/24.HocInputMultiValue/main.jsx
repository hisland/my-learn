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
    console.log('values', JSON.stringify(form.getFieldsValue(true), null, ' '))
  }

  const initialValues = {
    aa: 'aa',
    bb: 'bb',
    value1: 123,
    value2: 456,
  }

  return (
    <div>
      <ul>
        <li>
          这种用法必须是 FormItem 带上 shouldUpdate 或者 dependencies 属性
        </li>
        <li>并且 Input 必须是 FormItem 的子节点函数来返回</li>
        <li>shouldUpdate 写法简单, 依赖变化会执行很多次</li>
        <li>
          dependencies 属性 需要明确指定, 稍微繁琐, 不过依赖变化只执行一次
        </li>
        <li>hack 之后是可以触发 onValuesChange, 并且针对每个属性都执行一次</li>
        <li>
          最终必须要 form.getFieldsValue(true) 才能取得全部值, 因为没有 FormItem
          创建 Field
        </li>
      </ul>
      <div style={{ width: '600px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <FormItem label="antd-Input" name="aa">
            <Input></Input>
          </FormItem>

          <FormItem label="MyInput" name="bb">
            <MyInput></MyInput>
          </FormItem>

          <FormItem label="对象Input shouldUpdate" shouldUpdate>
            {() => (
              <HocInputMultiValue
                markMe="shouldUpdate"
                form={form}
                valuesMap={{ aa: 'bb', bb: 'cc' }}
              ></HocInputMultiValue>
            )}
          </FormItem>

          <FormItem label="对象Input dependencies" dependencies={['aa', 'bb']}>
            {() => (
              <HocInputMultiValue
                markMe="dependencies"
                form={form}
                valuesMap={{ aa: 'bb', bb: 'cc' }}
              ></HocInputMultiValue>
            )}
          </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={Show}>显示</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

function MyInput(props) {
  console.log('MyInput', props)
  return <Input {...props}></Input>
}

function HocInputMultiValue(props) {
  console.log('MyInputObject', props)
  // const { value } = props
  const { form, valuesMap } = props
  const pairs = Object.entries(valuesMap)

  const value = {}
  for (const [formKey, dataKey] of pairs) {
    value[dataKey] = form.getFieldValue(formKey)
  }

  // 如果选的是对象用这个方法简单些
  const onChangeAll = (obj) => {
    const { dispatch } = form.getInternalHooks('RC_FORM_INTERNAL_HOOKS')
    for (const [formKey, dataKey] of pairs) {
      dispatch({
        type: 'updateValue',
        namePath: formKey,
        value: obj[dataKey],
      })
    }
  }

  // 这里是单个变化
  const onChangeOne = (key) => (ee) => {
    const { dispatch } = form.getInternalHooks('RC_FORM_INTERNAL_HOOKS')
    const [formKey] = pairs.find(([, dataKey]) => dataKey === key)
    dispatch({
      type: 'updateValue',
      namePath: formKey,
      value: ee.target.value,
    })
  }

  const onChangeSome = (key) => (ee) => {
    const { dispatch } = form.getInternalHooks('RC_FORM_INTERNAL_HOOKS')
    const newObj = {
      ...value,
      [key]: ee.target.value,
    }
    console.log(1, 'before for')
    for (const [formKey, dataKey] of pairs) {
      dispatch({
        type: 'updateValue',
        namePath: formKey,
        value: newObj[dataKey],
      })
    }
    console.log(2, 'after for')
  }

  return (
    <div>
      <Input value={value.bb} onChange={onChangeSome('bb')}></Input>
      <Input value={value.cc} onChange={onChangeSome('cc')}></Input>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
