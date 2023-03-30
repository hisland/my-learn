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
  Badge,
  Tabs,
} from 'antd'

function App() {
  console.log('App render')
  const [ativeTab, set_ativeTab] = useState('tab1')

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <div style={{ width: '500px' }}>
        <Tabs onChange={(tab) => set_ativeTab(tab)} activeKey={ativeTab}>
          <Tabs.TabPane
            tab={
              <Badge count={3}>
                <div style={{ marginRight: '10px' }}>123</div>
              </Badge>
            }
            key="tab1"
          >
            123
          </Tabs.TabPane>
          <Tabs.TabPane tab="tab2" key="tab2">
            456
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
