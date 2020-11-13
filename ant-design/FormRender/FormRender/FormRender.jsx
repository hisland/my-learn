import React from 'react'
import { useState, useEffect } from 'react'
import {
  Button,
  Drawer,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Row,
  Col,
  Table,
} from 'antd'
import { Form } from 'antd'

const { Group: CheckboxGroup } = Checkbox

import { omit } from './util.js'
import { genUidFactory } from './util.js'
import { RowColLayout } from './RowColLayout.jsx'
import HocDatePicker from './HocDatePicker.jsx'

export default function FormRender({ formDef }) {
  console.log('FormRender render')
  window.kkk2 = formDef

  const [form] = Form.useForm()
  formDef.refForm = form

  const initialValues = formDef.hocGenInitialValue()

  function onFinish(values) {
    console.log('onFinish', values)
  }
  function onFinishFailed(values) {
    console.log('onFinishFailed', values)
  }
  function onValuesChange(values) {
    console.log('onValuesChange', values)
  }

  const genItemKey = genUidFactory('form-item')
  return (
    <Form
      {...formDef.form}
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
    >
      <RowColLayout itemSpan={formDef.itemSpan}>
        {formDef.items.map((item) => {
          const { hocChild, hocSpan, hocComputed, ...itemProps } = item

          // 自动设置 key
          const key = itemProps.name || genItemKey()
          itemProps.key = key

          return [
            hocSpan,
            <Form.Item {...itemProps}>
              {RenderHocChild(hocChild, form)}
            </Form.Item>,
          ]
        })}
      </RowColLayout>
    </Form>
  )
}

function RenderHocChild(hocChild, form) {
  // 直接返回 JSX 节点
  if (hocChild.$$typeof) return hocChild

  console.log('RenderHocChild render')

  const { style, hocType, ...childProps1 } = hocChild

  // 默认设置 width: '100%'
  childProps1.style = style ? { width: '100%', ...style } : { width: '100%' }

  switch (hocType) {
    case 'ValueListSelect':
      return <div {...childProps1}>未处理的: {hocType}</div>
    // return <ValueListSelect {...childProps1}></ValueListSelect>
    case 'HocDatePicker':
      return RenderHocDatePicker(childProps1, form)
    case 'Select':
      return RenderSelect(childProps1, form)
    case 'Input':
      return <Input {...childProps1}></Input>
    case 'TextArea':
      return <Input.TextArea {...childProps1}></Input.TextArea>
    case 'InputNumber':
      return <InputNumber {...childProps1}></InputNumber>
    case 'SubmitButton':
      return (
        <Button {...childProps1} htmlType="submit" children="提交"></Button>
      )
    default:
      return <div {...childProps1}>未处理的: {hocType}</div>
  }
}

function RenderSelect(childProps1, form) {
  const { hocOptions, ...childProps2 } = childProps1
  return (
    <Select {...childProps2}>
      {hocOptions.map((vv) => (
        <Select.Option key={vv.value} value={vv.value}>
          {vv.label}
        </Select.Option>
      ))}
    </Select>
  )
}

function RenderHocDatePicker(childProps1, form) {
  const { hocLt, hocGt, ...childProps2 } = childProps1
  childProps2.disabledDate = hocLt
    ? SetDisabledDate(form, '<', hocLt)
    : hocGt
    ? SetDisabledDate(form, '>', hocGt)
    : null
  return <HocDatePicker {...childProps2} />
}

function SetDisabledDate(form, compareOp, thatKey) {
  if (compareOp === '<') {
    return (cell) => {
      const thatValue = form.getFieldValue(thatKey)
      if (thatValue) {
        return cell.isAfter(thatValue, 'day')
      }
    }
  } else {
    return (cell) => {
      const thatValue = form.getFieldValue(thatKey)
      if (thatValue) {
        return cell.isBefore(thatValue, 'day')
      }
    }
  }
}
