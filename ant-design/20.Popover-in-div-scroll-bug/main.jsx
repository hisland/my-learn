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

function BtnConfirm({
  disabled,
  onOk,
  title,
  btnText = '删除',
  confirmText = '确定',
}) {
  const [visible, setVisible] = useState(false)
  function DoClick() {
    setVisible(false)
    onOk()
  }
  function getPopupContainer(el) {
    let parentNode = el.parentNode
    while (parentNode !== document.body) {
      const { scrollHeight, offsetHeight } = parentNode
      console.log(parentNode, scrollHeight, offsetHeight)
      if (scrollHeight !== offsetHeight) {
        return parentNode
      }
      parentNode = parentNode.parentNode
    }
    return document.body
  }
  return disabled ? (
    <Button type="primary" danger disabled>
      {btnText}
    </Button>
  ) : (
    <Popover
      visible={visible}
      onVisibleChange={setVisible}
      content={
        <Button type="primary" size="small" danger onClick={DoClick}>
          {confirmText}
        </Button>
      }
      title={title}
      trigger="click"
      getPopupContainer={getPopupContainer}
    >
      <Button type="primary" danger>
        {btnText}
      </Button>
    </Popover>
  )
}

function App() {
  console.log('run App')

  return (
    <div
      className="aa"
      style={{
        margin: '30px',
        padding: '10px',
        height: '300px',
        overflow: 'auto',
        background: 'pink',
      }}
    >
      <div>这其实也不算是 bug, 因为滚动条并不是 body, 是一个没有定位的 div</div>
      <div
        className="bb"
        style={{ padding: '100px', height: '1000px', background: 'cyan' }}
      >
        <BtnConfirm>
          <div>hello</div>
        </BtnConfirm>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
