import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef, useImperativeHandle } from 'react'
import 'antd/dist/antd.css'
import {
  Button,
  Drawer,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Radio,
  Switch,
  Checkbox,
  Row,
  Col,
  Tabs,
  Table,
  Form,
} from 'antd'

function App() {
  console.log('run App')

  const [form] = Form.useForm()
  const [num, setNum] = useState(1)
  const ref1 = useRef()

  function onValuesChange(changedValues, allValues) {
    console.log('onValuesChange()', changedValues, allValues)
  }

  async function DoSave() {
    console.log('DoSave()', form.getFieldsValue())
  }

  return (
    <div style={{ padding: '20px', width: '800px' }}>
      <ul></ul>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item label="aa" name="aa">
          <Sub1
            ref={(sub1) => {
              ref1.current = sub1
              console.log('App got sub1 ref', num, sub1)
            }}
          ></Sub1>
        </Form.Item>
        <div>
          <Button onClick={DoSave}>form.getFieldsValue</Button>
        </div>
      </Form>
    </div>
  )
}

const Sub1 = React.forwardRef(function (props, ref) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }

  useImperativeHandle(ref, () => {
    console.log('run useImperativeHandle')
    return {
      num,
      halo: () => {
        console.log(1, props.show, num)
      },
    }
  })

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))
