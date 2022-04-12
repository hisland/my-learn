import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useCallback } from 'react'
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

function App() {
  console.log('App render')

  const [columns, set_columns] = useState([
    { title: 'id', dataIndex: 'id' },
    { title: 'name', dataIndex: 'name' },
  ])
  const [dataSource, set_dataSource] = useState(() => {
    const list = []
    for (let ii = 1; ii <= 22; ii++) {
      list.push({ id: ii, name: 'hello' + ii })
    }
    return list
  })
  const [pagination, set_pagination] = useState({
    current: 1,
    pageSize: 10,
    total: dataSource.length,
  })
  const onChange = useCallback((newPagination, filters, sorter, extra) => {
    console.log(newPagination, filters, sorter, extra)
    set_pagination({
      ...pagination,
      ...newPagination,
    })
  })

  // 正常服务器分页的值 dataSource.length <= pagination.pageSize
  const start = (pagination.current - 1) * pagination.pageSize
  const end = pagination.current * pagination.pageSize
  const list = dataSource.slice(start, end)

  const [selectedRowKeys, set_selectedRowKeys] = useState([])
  console.log('selectedRowKeys: ', selectedRowKeys)
  const rowSelection = {
    type: 'checkbox',
    selectedRowKeys,
    // onChange: (selectedRowKeys, selectedRows) => {
    //   console.log('onChange', selectedRowKeys, selectedRows)
    //   set_rowSelection({
    //     ...rowSelection,
    //     selectedRowKeys,
    //   })
    // },
    onSelect: (record, selected, selectedRows, nativeEvent) => {
      console.log('onSelect', record, selected, selectedRows, nativeEvent)
      const newList = selected
        ? [...selectedRowKeys, record.id].sort()
        : selectedRowKeys.filter((id) => record.id !== id)
      set_selectedRowKeys(newList)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log('onSelectAll', selected, selectedRows, changeRows)
      if (selected) {
        set_selectedRowKeys(dataSource.map((vv) => vv.id))
      } else {
        set_selectedRowKeys([])
      }
    },
  }

  return (
    <div>
      <ul>
        <li>全选所有页的操作, 翻页保留id</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={list}
          onChange={onChange}
          pagination={pagination}
          rowSelection={rowSelection}
          // preserveSelectedRowKeys
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
