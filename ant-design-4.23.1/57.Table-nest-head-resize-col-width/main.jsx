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
  // console.log('props1: ', width, props)

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
      draggableOpts={{ enableUserSelectHack: true }}
    >
      <th {...restProps} />
    </Resizable>
  )
}

function App() {
  console.log('App render')
  const [count, set_count] = useState(0)

  const [columns, set_columns] = useState([
    {
      title: '体重',
      width: 100,
      children: [
        {
          title: 'weight',
          dataIndex: 'weight',
          width: 50,
        },
      ],
    },
    {
      title: '身高',
      width: 100,
      children: [
        {
          title: 'height',
          dataIndex: 'height',
          width: 50,
        },
      ],
    },
    {
      title: '合并列',
      width: 100,
      children: [
        {
          title: 'weight',
          dataIndex: 'weight',
          width: 50,
        },
        {
          title: 'height',
          dataIndex: 'height',
          width: 50,
        },
      ],
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: 100,
      render: (value, record, rowIndex) => {
        return value
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 200,
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

  const handleResize = (indexList) => (e, obj) => {
    // console.log('obj: ', obj)
    // const { node, size, handle } = obj
    const { size } = obj
    console.log('size: ', size)
    const nextColumns = [...columns]
    const [firstIndex, ...restIndex] = indexList
    let col = nextColumns[firstIndex]
    for (const index of restIndex) {
      col = col.children[index]
    }
    col.width = size.width
    set_columns(nextColumns)
  }

  // 递归修改
  function deepIn(columns, indexList = []) {
    columns.forEach((col, index) => {
      if (col.children) {
        deepIn(col.children, [...indexList, index])
      } else {
        col.onHeaderCell = (column) => {
          // console.log('column: ', column)
          return {
            width: column.width,
            onResize: handleResize([...indexList, index]),
          }
        }
      }
    })
  }
  deepIn(columns)
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
        <li>合并表头的时候拖动修改宽度</li>
        <li>合并表头只能拖动子列, 不能拖动父列</li>
      </ul>
      <div>
        <button
          onClick={() => {
            set_count(count + 1)
          }}
        >
          add1
        </button>
      </div>
      <div
        style={
          {
            // width: '500px',
          }
        }
      >
        <Table
          bordered
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
