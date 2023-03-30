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

  // 纯前端分页, 直接使用 list

  // 正常服务器分页的值 dataSource.length <= pagination.pageSize
  const start = (pagination.current - 1) * pagination.pageSize
  const end = pagination.current * pagination.pageSize
  const list = dataSource.slice(start, end)

  // // 异常值 pagination.pageSize < dataSource.length < pagination.total
  // const start = (pagination.current - 1) * pagination.pageSize
  // const end = pagination.current * pagination.pageSize + 3
  // const list = dataSource.slice(start, end)

  return (
    <div>
      <ul>
        <li>修改分页设置, 由外部传入</li>
        <li>
          dataSource.length &lt;= pagination.pageSize, 不管在第几页, 都全部渲染,
          就是远程分页
        </li>
        <li>
          dataSource.length === pagination.total, 根据 page 设置, 从 dataSource
          里面截取渲染, 就是普通的本地分页
        </li>
        <li>
          pagination.pageSize &lt; dataSource.length &lt; pagination.total,
          这个时候按本地渲染, 但是会提示你配置是否正确, 并且分页信息也并不正确
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={list}
          onChange={onChange}
          pagination={pagination}
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
