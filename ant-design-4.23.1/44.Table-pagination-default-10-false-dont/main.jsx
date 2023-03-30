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
    { title: 'name', dataIndex: 'name' },
  ])
  const [dataSource, set_dataSource] = useState(() => {
    const list = []
    for (let ii = 1; ii <= 22; ii++) {
      list.push({ id: ii, name: 'hello' + ii })
    }
    return list
  })

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
        <li>默认内部分页, 每页10条</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
        ></Table>
      </div>
      <div style={{ width: '500px' }}>
        <div>不分页</div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
          pagination={false}
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
