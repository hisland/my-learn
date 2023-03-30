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
      width: 50,
    },
    {
      title: '这是一个很长的标题',
      dataIndex: 'noVal',
      // width: 20,
      // render: (value, record, rowIndex) => {
      //   return <div style={{ width: '220px' }}>{value}</div>
      // },
    },
    {
      title: 'name',
      dataIndex: 'name',
      render: (value, record, rowIndex) => {
        return value
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'height',
      dataIndex: 'height',
    },
    {
      title: 'height',
      dataIndex: 'height',
      width: 20,
    },
  ])
  const [dataSource, set_dataSource] = useState([
    {
      id: '1',
      name: 'hello',
      age: 17,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
      // noVal: '1',
    },
    {
      id: '2',
      name: 'hello',
      age: 20,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
      // noVal: '2022041816210601210097',
    },
    {
      id: '3',
      name: 'hello3',
      age: 20,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
    },
    {
      id: '4',
      name: 'hello4',
      age: 20,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
    },
    {
      id: '5',
      name: 'hello5',
      age: 20,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
    },
    {
      id: '6',
      name: 'hello6',
      age: 20,
      weight: '8888888 | 小旋风',
      height: '2022041816210601210097',
    },
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
    // col.width = col.width || 50
    col.onHeaderCell = (column) => {
      // console.log('column: ', column)
      return {
        width: column.width || 50,
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
        <li>
          当 scroll x,y 同时使用的时候, 列宽超过 table, 只会根据 tbody
          里面的内容计算宽度, thead 里面的忽略了
        </li>
      </ul>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          components={components}
          columns={columns2}
          dataSource={dataSource}
          scroll={{
            x: true,
            // x: "max-content",
            y: 300,
          }}
          tableLayout="fixed"
        ></Table>
      </div>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          components={components}
          columns={columns2}
          dataSource={dataSource}
          scroll={{
            x: true,
            // x: "max-content",
            // y: 300,
          }}
          tableLayout="fixed"
        ></Table>
      </div>
      <div style={{ width: '500px' }}>
        <Table
          rowKey="id"
          components={components}
          columns={columns2}
          dataSource={dataSource}
          scroll={{
            // x: true,
            // x: "max-content",
            y: 300,
          }}
          tableLayout="fixed"
        ></Table>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
