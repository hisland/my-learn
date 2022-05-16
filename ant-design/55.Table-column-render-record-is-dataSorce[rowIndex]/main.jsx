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
  console.log('App render')

  const [columns, set_columns] = useState([
    {
      title: 'name',
      dataIndex: 'name',
      render: (value, record, rowIndex) => {
        console.log('value, record, rowIndex: ', value, record, rowIndex)
        console.log(record === dataSource[rowIndex]) // true
        return value
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ])
  const [dataSource, set_dataSource] = useState([
    { id: '1', name: 'hello', age: 17 },
    { id: '2', name: 'hello', age: 20 },
    { id: '3', name: 'hello3', age: 20 },
  ])

  const rowSelection = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('onChange', selectedRowKeys, selectedRows)
    },
    onSelect: (record, selected, selectedRows, nativeEvent) => {
      console.log('onSelect', record, selected, selectedRows, nativeEvent)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log('onSelectAll', selected, selectedRows, changeRows)
    },
  }

  return (
    <div>
      <ul>
        <li>record === dataSource[rowIndex] true, 是同一个对象</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
