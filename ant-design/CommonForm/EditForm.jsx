import React, { Component } from 'react'
import {
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
import { Form } from 'antd'

const { Group: CheckboxGroup } = Checkbox
const { Option } = Select
const { TextArea } = Input
const FormItem = Form.Item

import { hasOwnProperty } from './util'

const SpanMax = 24
const SpanDefault = 8
function ItemsToRows(items) {
  let nowRow = []
  const rs = [nowRow]
  let count = 0
  for (const item of items) {
    const nowSpan = item.span || SpanDefault
    const willSpan = count + nowSpan
    if (willSpan > SpanMax) {
      nowRow = [item]
      rs.push(nowRow)
      count = nowSpan
    } else {
      nowRow.push(item)
      count = willSpan
    }
  }
  return rs
}

const FormOptionsDefault = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

class CommonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  NoSave = (ee) => ee.preventDefault()

  getInitialValue = (obj, key, defaultValue = null, type = 'Input') => {
    if (typeof key === 'string') {
      if (hasOwnProperty(obj, key)) {
        const value = obj[key]
        if (type === 'DatePicker') {
          return moment(value)
        } else {
          return value
        }
      } else {
        return defaultValue
      }
    } else {
      const obj2 = {}
      for (const [myKey, objKey] of Object.entries(key)) {
        obj2[myKey] = obj[objKey]
      }
      const notEmpty = Object.values(obj2).some((vv) => vv !== undefined)
      return notEmpty ? obj2 : defaultValue
    }
  }

  GenRows = () => ItemsToRows(this.props.items)

  RenderItem = (item) => {
    if (item.type === 'Input') {
      return <Input {...item.typeOptions} />
    } else if (item.type === 'Select') {
      return (
        <Select {...item.typeOptions}>
          {item.optionList.map((item) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      )
    } else if (item.type === 'InputNumber') {
      return <InputNumber {...item.typeOptions} />
    } else if (item.type === 'DatePicker') {
      return <DatePicker {...item.typeOptions} />
    } else if (item.type === 'Lov') {
      return <span>未处理的 item.type: {item.type}</span>
      // return <Lov {...item.typeOptions} />
    } else if (item.type === 'CheckboxGroup') {
      return <CheckboxGroup {...item.typeOptions} options={item.optionList} />
    } else if (item.type === 'TextArea') {
      return <TextArea {...item.typeOptions} />
    } else {
      return <span>未处理的 item.type: {item.type}</span>
    }
  }

  render() {
    const { FormOptions } = this.props
    return (
      <Form
        {...FormOptionsDefault}
        {...FormOptions}
        onSubmit={this.NoSave}
        onValuesChange={this.props.onValuesChange}
      >
        {this.GenRows().map((row, index) => (
          <Row key={index}>
            {row.map((item, index) => (
              <Col span={item.span || SpanDefault} key={index}>
                <FormItem
                  {...item.FormItemOptions}
                  key={item.FormItemOptions.name}
                >
                  {this.RenderItem(item)}
                </FormItem>
              </Col>
            ))}
          </Row>
        ))}
      </Form>
    )
  }
}

export default CommonForm
