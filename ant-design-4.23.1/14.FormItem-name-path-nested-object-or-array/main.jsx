import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import {
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
    // console.log('22', changedValues, allValues)
    Show()
  }
  const Show = () => {
    console.log('values', form.getFieldsValue())
  }
  return (
    <div>
      <div>name 使用 数组, 递归生成对象/数组</div>
      <div>根据遇到的顺序生成, 如果首先遇到对象, 则生成对象</div>
      <div>根据遇到的顺序生成, 如果首先遇到数组, 则生成数组</div>
      <div>混用的时候, 效果看 dd/ee 的结果</div>
      <div style={{ width: '500px' }}>
        <Form form={form} onValuesChange={onValuesChange}>
          <FormItem label="生成对象" name={['aa', 'bb']}>
            <Input></Input>
          </FormItem>
          <FormItem label="生成数组" name={['cc', 0]}>
            <Input></Input>
          </FormItem>
          <FormItem label="混合数组/对象, 有点怪不要这样 dd" name={['dd', 1]}>
            <Input></Input>
          </FormItem>
          <FormItem
            label="混合数组/对象, 有点怪不要这样 dd"
            name={['dd', 'some']}
          >
            <Input></Input>
          </FormItem>
          <FormItem
            label="混合对象/数组, 有点怪不要这样 ee"
            name={['ee', 'some']}
          >
            <Input></Input>
          </FormItem>
          <FormItem label="混合对象/数组, 有点怪不要这样 ee" name={['ee', 0]}>
            <Input></Input>
          </FormItem>
          <FormItem label={LabelFixWidth('', '140px')} colon={false}>
            <Button onClick={Show}>显示</Button>
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
