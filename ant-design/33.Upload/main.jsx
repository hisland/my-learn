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
  Switch,
  Row,
  Col,
  Table,
  Form,
  Upload,
} from 'antd'

const FormItem = Form.Item

function App() {
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('onValuesChange', changedValues, allValues)
  }
  const SetValue = () => {
    const val1 = Math.random().toString(36).substr(2, 8)
    form.setFieldsValue({ value1: val1 })
  }

  function handleChange(info) {
    console.log('info.file: ', info.file.status)
    console.log('info.file: ', info.file)
    console.log('info.fileList: ', info.fileList)
  }

  const initialValues = {
    value1: 1,
  }

  console.log('App render')

  return (
    <div>
      <ul>
        <li>Upload 只是一个范围, 需要内部放置按钮或者其它</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form
          form={form}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Row>
            <Col>
              <Upload>
                <Button>Click to Upload</Button>
              </Upload>
            </Col>
          </Row>

          <FormItem label="单文件">
            <Upload onChange={handleChange}>
              <Button>Click to Upload</Button>
            </Upload>
          </FormItem>
          <FormItem label="多文件">
            <Upload multiple={true} onChange={handleChange}>
              <Button>Click to Upload</Button>
            </Upload>
          </FormItem>
          <FormItem label="多文件 不显示列表">
            <Upload multiple={true} onChange={handleChange} showUploadList={false}>
              <Button>Click to Upload</Button>
            </Upload>
          </FormItem>
          <FormItem label="value1" name="value1">
            <Input></Input>
          </FormItem>

          <FormItem wrapperCol={{ offset: 8, span: 16 }}>
            <Button onClick={SetValue}>Random value1</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
