import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef, useImperativeHandle } from 'react'
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
  Row,
  Col,
  Table,
} from 'antd'
import { Form } from '@ant-design/compatible'

const FormItem = Form.Item

class App extends Component {
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form>
        <FormItem label="明确租赁期限">
          {getFieldDecorator('leaseTermSign', {
            rules: [{ required: true, message: 'common.please.select' }],
            initialValue: 123,
          })(
            <Sub1
              ref={(sub1) => {
                console.log('App got sub1 ref', sub1)
              }}
            ></Sub1>
          )}
        </FormItem>
      </Form>
    )
  }
}
const AppForm = Form.create({
  onValuesChange(props, changedValues, allValues) {
    console.log(
      'onValuesChange',
      changedValues,
      changedValues.timeBegin && changedValues.timeBegin.format()
    )
    const values = props.form.getFieldsValue()
    console.log('raw', JSON.stringify(values))
  },
})(App)

const Sub1 = React.forwardRef(function (props, ref) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }

  useImperativeHandle(ref, () => {
    console.log('run useImperativeHandle')
    return {
      num,
      halo: () => {
        console.log(1, props.show, num)
      },
    }
  })

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
})

function Root() {
  console.log('run App')

  return (
    <div>
      <AppForm></AppForm>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
