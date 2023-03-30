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
  console.log('run App')
  const [foo, setFoo] = useState(123)
  const [bar, setBar] = useState(999)

  useEffect(() => {
    ;(async () => {
      console.log('11')
      const rs = await new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log('22')
          resolve(Math.floor(Math.random() * 100))
        }, 1000)
      })
      console.log('33')
      setBar(rs) // 注意这个依赖, 如果自己依赖自己, 会无限调用
    })()
  }, [foo]) // 注意这个依赖, 如果自己依赖自己, 会无限调用

  return (
    <div>
      <Button
        onClick={() => {
          setFoo(Math.floor(Math.random() * 100))
        }}
      >
        change foo
      </Button>
      <Sub>
        <div>foo: {foo}</div>
        <div>bar: {bar}</div>
      </Sub>
    </div>
  )
}

function Sub({ children }) {
  console.log('run Sub')
  return (
    <div>
      <div>yes</div> {children} <div>ok</div>{' '}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
