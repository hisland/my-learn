import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import { Button } from 'antd'
import { Input } from 'antd'
import { Switch, Checkbox } from 'antd'
import { Drawer } from 'antd'
import { Table } from 'antd'
import { Form } from 'antd'
import { Row, Col } from 'antd'

const FormItem = Form.Item

import { RenderList } from './RenderJSON.jsx'

function App() {
  const layout = [
    {
      hocType: 'Row',
      children: [
        {
          hocType: 'Col',
          children: [
            {
              hocType: 'div',
              children: '123',
            },
          ],
        },
      ],
    },
  ]
  return <div>{RenderList(layout)}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
