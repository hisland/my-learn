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
  Spin,
} from 'antd'

const FormItem = Form.Item

function App() {
  console.log('App render')

  const [foo, set_foo] = useState(null)

  const [columns, set_columns] = useState([
    {
      title: 'name1',
      dataIndex: 'name1',
      // shouldCellUpdate: (prevRecord, nextRecord) => {
      //   console.log('prevRecord, nextRecord: ', prevRecord, nextRecord)
      //   return true
      // },
      render: (value, record, index) => {
        console.log('name1 render value: ', value)
        return (
          <Select
            style={{ width: '100%' }}
            onChange={(value) => {
              record.name1 = value
              // set_dataSource(dataSource) // 数组引用不变, 不会 re-render
              set_dataSource(dataSource.map((vv) => vv)) // 新数组会 re-render, item 还是原来的 item
              // 值改了之后, 只要触发 re-render 都能看到最新值
            }}
            value={value}
            placeholder="please select"
          >
            <Select.Option value={123}>123</Select.Option>
            <Select.Option value={456}>456</Select.Option>
          </Select>
        )
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ])
  const [dataSource, set_dataSource] = useState([
    { id: '1', name: 'hello', age: 17, name1: null },
    { id: '2', name: 'hello', age: 20, name1: null },
    // { id: '3', name: 'hello3', age: 20, name1: null },
  ])

  return (
    <div>
      <div style={{ margin: '10px', border: '1px solid red' }}>
        <ul>
          <li>测试 Select 外部传入 value onChange 操控</li>
          <li>value 为 undefined 认为是没有传入, 内部会有缓存值不受外部影响</li>
          <li>
            value 为 null 才能正常的显示 placeholder 之类的, 以及值从外部提供
          </li>
        </ul>
        <div style={{ width: '300px' }}>
          <Select
            style={{ width: '100%' }}
            onChange={(value) => {
              console.log('value: ', value)
              // set_foo(value) // 这里不 set, 这个 Select 的值不会变化
            }}
            value={foo}
            placeholder="please select"
          >
            <Select.Option value={123}>123</Select.Option>
            <Select.Option value={456}>456</Select.Option>
          </Select>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            set_dataSource(
              dataSource.map((vv) => {
                // vv.id += 1
                vv.age += 1
                return vv
              })
            )
          }}
        >
          change all age
        </button>
      </div>
      <ul>
        <li style={{ color: 'red' }}>
          antd-v3 column.render 每次都会执行, 所以 select 正常显示
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          // rowKey={(row) => row.refreshKey ?? row.id}
          columns={columns}
          dataSource={dataSource}
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
