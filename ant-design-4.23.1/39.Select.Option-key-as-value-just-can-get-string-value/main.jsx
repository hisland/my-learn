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

  const [obj, set_obj] = useState({})
  const onValuesChange = (changedValues, allValues) => {
    set_obj(allValues)
  }

  console.log('App render')

  return (
    <div>
      <ul>
        <li>
          Select.Option 的 value 缺失, 会用 key 当作选中值, 但是会被转换成字符串
        </li>
        <li>始终使用 value 属性来指定值可避免这种情况</li>
        <li>value 是原始值, 不能是对象/数组, 会报错, 具体原因未知</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Form form={form} onValuesChange={onValuesChange}>
          <Form.Item label="key作为value" name="field1">
            <Select>
              <Select.Option key={'aa'}>key string</Select.Option>
              <Select.Option key={12}>
                key number 会得到 string 值
              </Select.Option>
              <Select.Option key={null}>
                key null 会得到 string 值
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="指定value" name="field2">
            <Select>
              <Select.Option key="aa1" value={12}>
                数字值
              </Select.Option>
              <Select.Option key="aa2" value={null}>
                null值
              </Select.Option>
              <Select.Option key="aa3" value={'aa'}>
                字符串值
              </Select.Option>
              <Select.Option disabled key="aa4" value={[1, 2, 3]}>
                数组值 - 不能使用
              </Select.Option>
              <Select.Option disabled key="aa5" value={{ aa: 1, bb: 2 }}>
                对象值 - 不能使用
              </Select.Option>
            </Select>
          </Form.Item>
          <div>{JSON.stringify(obj, null, '  ')}</div>
        </Form>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
