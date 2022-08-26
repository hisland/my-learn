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
  Radio,
  Checkbox,
  Switch,
  Row,
  Col,
  Table,
  Upload,
  Spin,
} from 'antd'
import {
  CheckOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Form } from '@ant-design/compatible'
import '@ant-design/compatible/assets/index.css'

const FormItem = Form.Item
const { Option } = Select

class App1 extends React.Component {
  constructor(props) {
    console.log('App1 constructor')
    super(props)
    this.state = {
      record: {},
    }
  }

  componentDidMount() {}

  handleSave = (ee) => {
    ee.preventDefault()
    console.log('obj: ', obj)
  }
  log1 = (obj) => {
    console.log('obj: ', obj)
  }

  render() {
    console.log('App1 render')
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props
    const { record } = this.state

    return (
      <Form onSubmit={this.handleSave}>
        <FormItem label="组织">
          {getFieldDecorator('setOfBooksId', {
            rules: [{ required: true, message: '123' }],
            initialValue: record.id ? record.setOfBooksId : '11',
          })(
            <Select>
              <Option key={11} value={11}>
                {11}
              </Option>
              <Option key={22} value={22}>
                {22}
              </Option>
            </Select>
          )}
        </FormItem>
        <FormItem label={22}>
          {getFieldDecorator('enabled', {
            initialValue: record.id ? record.enabled : true,
            valuePropName: 'checked',
          })(
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          )}
        </FormItem>

        <FormItem label={33}>
          {getFieldDecorator('budgetFlag', {
            initialValue: record.id ? record.budgetFlag : false,
          })(
            <Radio.Group onChange={this.log2}>
              <Radio value>{11}</Radio>
              <Radio value={false}>{22}</Radio>
            </Radio.Group>
          )}
        </FormItem>

        <FormItem label="自定义组件1">
          {getFieldDecorator('val1', {
            initialValue: record.id ? record.val1 : false,
          })(
            <Test1
              onChange={(val) => {
                console.log('Test1 onChange: ', val)
              }}
            ></Test1>
          )}
        </FormItem>
        {getFieldValue('val1') === 1 && (
          <FormItem label="自定义2修改 value,onChange 名字">
            <div>修改 valuePropName,trigger</div>
            {getFieldDecorator('val2', {
              initialValue: record.id ? record.val2 : false,
              valuePropName: 'haha',
              trigger: 'god',
            })(
              <Test2
                onChange={(val) => {
                  console.log('Test2 onChange: ', val)
                }}
              ></Test2>
            )}
          </FormItem>
        )}

        <div className="slide-footer">
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <Button>取消</Button>
        </div>
      </Form>
    )
  }
}

class Test1 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Test1 constructor: ', this.props)
  }
  set = (val) => {
    return () => {
      this.props.onChange(val)
    }
  }
  render() {
    console.log('Test1 render: ', this.props)
    return (
      <div>
        <div>value: {this.props.value}</div>
        <div>
          <Button onClick={this.set(1)}>1</Button>
          <Button onClick={this.set(2)}>2</Button>
        </div>
      </div>
    )
  }
}
class Test2 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Test2 constructor: ', this.props)
  }
  set = (val) => {
    return () => {
      this.props.god(val)
    }
  }
  render() {
    console.log('Test2 render: ', this.props)
    return (
      <div>
        <div>haha: {this.props.haha}</div>
        <div>
          <Button onClick={this.set(1)}>1</Button>
          <Button onClick={this.set(2)}>2</Button>
        </div>
      </div>
    )
  }
}

const App = Form.create()(App1)

ReactDOM.render(<App />, document.getElementById('root'))
