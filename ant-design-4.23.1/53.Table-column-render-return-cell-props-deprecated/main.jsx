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
      render: (value, record, index) => {
        return {
          children: value,
          props: {
            rowSpan: record.name_rowSpan,
          },
        }
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      render: (value, record, index) => {
        return {
          children: value,
          props: {
            rowSpan: record.age_rowSpan,
          },
        }
      },
    },
  ])
  const [dataSource, set_dataSource] = useState([
    { id: '1', name: 'hello', name_rowSpan: 2, age: 17, age_rowSpan: 1 },
    { id: '2', name: 'hello', name_rowSpan: 0, age: 20, age_rowSpan: 2 },
    { id: '3', name: 'hello3', name_rowSpan: 1, age: 20, age_rowSpan: 0 },
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
        <li>控制台会有提示用 onCell 替代</li>
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
