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
import { Resizable } from 'react-resizable'

import './main.scss'

function ResizableTitle(props) {
  const { onResize, width, ...restProps } = props

  if (!width) {
    return <th {...restProps} />
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation()
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

function App() {
  console.log('App render')

  const [columns, set_columns] = useState([
    {
      title: 'weight',
      dataIndex: 'weight',
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: 100,
      render: (value, record, rowIndex) => {
        console.log('value, record, rowIndex: ', value, record, rowIndex)
        console.log(record === dataSource[rowIndex]) // true
        return value
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 200,
    },
    {
      title: 'height',
      dataIndex: 'height',
    },
  ])
  const [dataSource, set_dataSource] = useState([
    { id: '1', name: 'hello', age: 17, weight: 150, height: 180 },
    { id: '2', name: 'hello', age: 20, weight: 130, height: 170 },
    { id: '3', name: 'hello3', age: 20, weight: 110, height: 160 },
  ])

  const components = {
    header: { cell: ResizableTitle },
  }

  const handleResize = (index) => (e, obj) => {
    // console.log('obj: ', obj)
    // const { node, size, handle } = obj
    const { size } = obj
    console.log('size: ', size)
    const nextColumns = [...columns]
    nextColumns[index] = {
      ...nextColumns[index],
      width: size.width,
    }
    set_columns(nextColumns)
  }

  // 其实直接修改原对象也行
  columns.forEach((col, index) => {
    col.onHeaderCell = (column) => {
      console.log('column: ', column)
      return {
        width: column.width,
        onResize: handleResize(index),
      }
    }
  })
  const columns2 = columns

  // 这是官方的方案
  // const columns2 = columns.map((col, index) => {
  //   return {
  //     ...col,
  //     onHeaderCell: (column) => {
  //       console.log('column: ', column)
  //       return {
  //         width: column.width,
  //         onResize: handleResize(index),
  //       }
  //     },
  //   }
  // })

  return (
    <div>
      <ul>
        <li>通过组合使用 react-resizable 来拖动修改列宽</li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          components={components}
          columns={columns2}
          dataSource={dataSource}
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
