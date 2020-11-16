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

import { genUidFactory } from './util.js'
import { genTriggerMap, genRunSerie } from './util.js'
import { RowColLayout } from './RowColLayout.jsx'
import HocDatePicker from './HocDatePicker.jsx'

export default function FormRender({ formDef }) {
  console.log('FormRender render')

  const [form] = Form.useForm()
  formDef.refForm = form

  const initialValues = formDef.hocGenInitialValue()

  function onFinish(values) {
    console.log('onFinish', values)
  }
  function onFinishFailed(values) {
    // console.log('onFinishFailed', values)
  }
  function onValuesChange(values) {
    // console.log('onValuesChange', values)
  }

  const depMap = new Map()
  for (const item of formDef.items) {
    const { hocRules, hocComputed, name } = item
    if (hocRules || hocComputed) {
      const list1 = hocRules ? hocRules[0].split(/, */) : []
      const list2 = hocComputed ? hocComputed[0].split(/, */) : []
      depMap.set(name, new Set(list1.concat(list2)))
    }
  }
  const triggerMap = genTriggerMap(depMap)
  const allKeys = new Set()
  for (const [name, depSet] of depMap) {
    allKeys.add(name)
    for (const depKey of depSet) {
      allKeys.add(depKey)
    }
  }
  const triggerFnMap = new Map()
  const bindTriggerFactory = (name) => (fn) => {
    console.log('bindTrigger', name)
    triggerFnMap.set(name, fn)
  }
  const notifyTriggerFactory = (name) => () => {
    console.log('notifyTrigger', name)
    const runSerie = genRunSerie(name, triggerMap)
    for (const key of runSerie) {
      const values = Array.from(depMap.get(key)).map((depKey) =>
        form.getFieldValue(depKey)
      )
      triggerFnMap.get(key)(values)
    }
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
          const { hocSpan, ...itemProps } = item

          // 自动设置 key
          itemProps.key = itemProps.name || genItemKey()

          itemProps.form = form

          if (allKeys.has(itemProps.name)) {
            itemProps.bindTrigger = bindTriggerFactory(itemProps.name)
            itemProps.notifyTrigger = notifyTriggerFactory(itemProps.name)
          }

          return [hocSpan, <HocFormItem {...itemProps}></HocFormItem>]
        })}
      </RowColLayout>
    </Form>
  )
}

function HocFormItem({
  hocRules,
  hocComputed,
  hocChild,
  form,
  bindTrigger,
  notifyTrigger,
  ...itemProps
}) {
  console.log('HocFormItem render')

  const getDepValues = (depStr) => {
    return depStr.split(/, */).map((key) => form.getFieldValue(key))
  }

  // 这里使用 useState, 主要是触发 Form.Item re-render, 否则其实可以像 hocComputed 那样直接赋值
  const [rulesDepValues, setRulesDepValues] = useState(
    hocRules ? getDepValues(hocRules[0]) : []
  )

  if (hocRules) {
    const { resetState, newRules } = hocRules[1](rulesDepValues)
    console.log('hocRules 1:', rulesDepValues)
    itemProps.rules = newRules
    if (resetState) {
      // 需要下面 Form.Item re-render 之后才进行校验, 否则状态还没有更新
      setTimeout(() => form.validateFields([itemProps.name]), 50)
    }
  }
  if (hocComputed) {
    console.log('hocComputed values 1:', getDepValues(hocComputed[0]))
    form.setFieldsValue({
      [itemProps.name]: hocComputed[1](getDepValues(hocComputed[0])),
    })
  }

  if (notifyTrigger) {
    hocChild.onChange = () => {
      notifyTrigger(itemProps.name)
    }
  }
  if (bindTrigger) {
    bindTrigger(() => {
      console.log('trigger: ', itemProps.name)

      if (hocRules) {
        console.log('hocRules 2:', getDepValues(hocRules[0]))
        setRulesDepValues(getDepValues(hocRules[0]))
      }
      if (hocComputed) {
        console.log('hocComputed values 2:', getDepValues(hocComputed[0]))
        form.setFieldsValue({
          [itemProps.name]: hocComputed[1](getDepValues(hocComputed[0])),
        })
      }
    })
  }

  return <Form.Item {...itemProps}>{RenderHocChild(hocChild, form)}</Form.Item>
}

function RenderHocChild(hocChild, form) {
  // 直接返回 JSX 节点
  if (React.isValidElement(hocChild)) return hocChild

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
