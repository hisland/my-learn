import React, { Component } from 'react'
import { useState, useEffect } from 'react'
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
import { RowColLayout } from './RowColLayout.jsx'
import { GenDateCompPair } from './DateLinkedDisabled.jsx'

function CommonForm({ props }) {
  console.log('CommonForm rerender')
  const [form] = Form.useForm()

  const [dateRequired, setDateRequired] = useState(true)

  function onValuesChange(changedValues, allValues) {
    // console.log('22', changedValues, allValues)

    if (hasOwnProperty(changedValues, 'useDate')) {
      setDateRequired(changedValues.useDate === 'yes')
      setTimeout(() => {
        form.validateFields(['fromDate', 'toDate'])
      }, 100)
    }

    if (
      hasOwnProperty(changedValues, 'fromDate') ||
      hasOwnProperty(changedValues, 'toDate')
    ) {
      CalcDays()
    }
  }

  function CalcDays() {
    const fromDate = form.getFieldValue('fromDate')
    const toDate = form.getFieldValue('toDate')
    if (fromDate && toDate) {
      const days = moment
        .duration(toDate.endOf('day') - fromDate.endOf('day'))
        .asDays()
      form.setFieldsValue({ days })
    }
  }

  const [FromDate, ToDate] = GenDateCompPair(form, 'fromDate', 'toDate')

  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <RowColLayout>
        <FormItem label="useDate" name="useDate">
          <Select>
            <Option value={'yes'}>是</Option>
            <Option value={'no'}>否</Option>
          </Select>
        </FormItem>
        <FormItem
          label="fromDate"
          name="fromDate"
          rules={[{ required: dateRequired }]}
        >
          <FromDate></FromDate>
        </FormItem>
        <FormItem
          label="toDate"
          name="toDate"
          rules={[{ required: dateRequired }]}
        >
          <ToDate></ToDate>
        </FormItem>
        <FormItem label="days" name="days">
          <Input disabled></Input>
        </FormItem>
        <FormItem label="ee" name="ee" rules={[{ required: dateRequired }]}>
          <Input></Input>
        </FormItem>
      </RowColLayout>
    </Form>
  )
}

export default CommonForm
