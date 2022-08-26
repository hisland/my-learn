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
import PropTypes from 'prop-types'

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
        <FormItem label="自定义组件1">
          {getFieldDecorator('val1', {
            initialValue: record.id ? record.val1 : 0,
          })(
            <Test1
              onChange={(val) => {
                console.log('Test1 onChange: ', val)
              }}
            ></Test1>
          )}
        </FormItem>

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

Test1.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
}

Test1.defaultProps = {
  // 这个 value 永远拿不到, 并且会收到提示 Warning: `getFieldDecorator` will override `value`, so please don't set `value` directly and use `setFieldsValue` to set it.
  // value: {},
  // value: null, // 不行
  // value: undefined, // 不行
  // 不写就不会有提示了, 提示也只是开发阶段, 不影响实际运行, 但是提示挺烦的
  onChange: () => {},
}

const App = Form.create()(App1)

ReactDOM.render(<App />, document.getElementById('root'))
