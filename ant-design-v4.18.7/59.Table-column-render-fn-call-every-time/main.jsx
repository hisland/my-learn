import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
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

  const [columns, set_columns] = useState([
    {
      title: 'name1',
      dataIndex: 'name1',
      render: (value, record, index) => {
        console.log('name1 render value: ', value)
        return [
          <Select
            key={Math.random()}
            style={{ width: '100%' }}
            onChange={(value) => {
              record.name1 = value
              // record.refreshKey = Math.random()
              // console.log(JSON.stringify(record, null, '  '))
              // columns[0].key = Math.random()
              // set_columns(columns.map((vv) => vv))
              set_dataSource(dataSource.map((vv) => vv))
            }}
            value={value}
            placeholder="please select"
          >
            <Select.Option value={123}>123</Select.Option>
            <Select.Option value={456}>456</Select.Option>
          </Select>,
        ]
      },
    },
    {
      title: 'name2',
      dataIndex: 'name2',
      render: (value, record, index) => {
        console.log('name2 render value: ', value)
        return [
          <Select
            key={Math.random()}
            style={{ width: '100%' }}
            onChange={(value) => {
              record.name2 = value
              // record.refreshKey = Math.random()
              // console.log(JSON.stringify(record, null, '  '))
              // columns[0].key = Math.random()
              // set_columns(columns.map((vv) => vv))
              set_dataSource(dataSource.map((vv) => vv))
            }}
            value={value}
            placeholder="please select"
          >
            <Select.Option value={123}>123</Select.Option>
            <Select.Option value={456}>456</Select.Option>
          </Select>,
        ]
      },
    },
    // {
    //   title: 'age',
    //   dataIndex: 'age',
    // },
  ])
  const [dataSource, set_dataSource] = useState([
    { id: '1', name: 'hello', age: 17, name1: null, name2: null },
    // { id: '2', name: 'hello', age: 20, name1: null, name2: null },
    // { id: '3', name: 'hello3', age: 20, name1: null, name2: null },
  ])

  return (
    <div>
      <div style={{ width: '500px' }}>
        <Table2
          rowKey="id"
          // rowKey={(row) => row.refreshKey ?? row.id}
          columns={columns}
          dataSource={dataSource}
        ></Table2>
      </div>
    </div>
  )
}

function Table2(props) {
  console.log('Table2 render')
  const { columns, ...restProps } = props
  // const cols2 = columns
  const cols2 = columns.map((col) => {
    const { render } = col
    console.log('render: ', render)
    // console.log('_ORG_RENDER_FN: ',  col._ORG_RENDER_FN);
    if (render) {
      return {
        ...col,
        render: (...args) => {
          console.log('new render 1')
          return render(...args)
        },
      }
      // if (!col._ORG_RENDER_FN) {
      //   col._ORG_RENDER_FN = render
      // }
      // col.render = (...args) => {
      //   console.log('new render 1')
      //   return col._ORG_RENDER_FN(...args)
      // }
    }
    return col
  })
  return <Table {...restProps} columns={cols2}></Table>
}

ReactDOM.render(<App />, document.getElementById('root'))
