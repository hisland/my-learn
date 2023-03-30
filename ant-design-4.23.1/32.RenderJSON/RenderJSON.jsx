import React, { Component } from 'react'
import { Row, Col } from 'antd'
import {
  Button,
  Drawer,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Checkbox,
  Table,
} from 'antd'
import { Form } from 'antd'

const { Group: CheckboxGroup } = Checkbox
const { Option } = Select
const { TextArea } = Input
const FormItem = Form.Item

export function HocRenderOne(props) {
  const { hocType, children, ...restProps } = props
  const child = Array.isArray(children) ? RenderList(children) : children
  if (hocType === 'Row') {
    return <Row {...restProps}>{child}</Row>
  } else if (hocType === 'Col') {
    return <Col {...restProps}>{child}</Col>
  } else if (hocType === 'div') {
    return <div {...restProps}>{child}</div>
  } else {
    return <div>未处理的 hocType {hocType}</div>
  }
}

export function RenderList(list) {
  return list.map((compDef, index) => (
    <HocRenderOne key={index} {...compDef}></HocRenderOne>
  ))
}
