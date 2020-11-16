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
import ss from './style.module.scss'

const { Group: CheckboxGroup } = Checkbox
const { Option } = Select
const { TextArea } = Input
const FormItem = Form.Item

import FormRender from './FormRender/FormRender.jsx'

export default function ContractInfo(props) {
  console.log('ContractInfo render')

  const formDef1 = {
    hocOnChange() {},
    hocGenInitialValue() {
      return {}
    },
    hocGenResultValue(values) {},
    refForm: null, // 界面渲染之后, 会自动把 form 引用挂在这里, 后续可以 formDef.refForm.xxx
    form: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    itemSpan: 24,
    items: [
      {
        name: 'planPaymentDate',
        label: '计划付款日期',
        rules: [{ required: true, message: '请选择' }],
        hocChild: { hocType: 'HocDatePicker' },
      },
      {
        name: 'beginDate',
        label: '开始日期',
        rules: [{ required: true, message: '请选择' }],
        hocSpan: 12,
        hocChild: { hocType: 'HocDatePicker', hocLt: 'endDate' },
      },
      {
        name: 'endDate',
        label: '结束日期',
        rules: [{ required: true, message: '请选择' }],
        hocSpan: 12,
        hocChild: { hocType: 'HocDatePicker', hocGt: 'beginDate' },
      },
      {
        name: 'payAmountWithTax',
        label: '计划付款额含税',
        rules: [{ required: true, message: '请选择' }],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'taxRate',
        label: '税率%',
        rules: [{ required: true, message: '请选择' }],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountTax',
        label: '计划付款税额',
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountNoTax',
        label: '计划付款额不含税',
        rules: [{ required: false, message: '请选择' }],
        hocChild: { hocType: 'InputNumber', precision: 2, disabled: true },
      },
      {
        wrapperCol: { span: 16, offset: 8 },
        hocChild: <Button htmlType="submit">123</Button>,
      },
    ],
  }

  const formDef2 = {
    hocOnChange() {},
    hocGenInitialValue() {
      return {}
    },
    hocGenResultValue(values) {},
    refForm: null, // 界面渲染之后, 会自动把 form 引用挂在这里, 后续可以 formDef.refForm.xxx
    form: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    itemSpan: 24,
    items: [
      {
        name: 'planPaymentDate',
        label: '计划付款日期',
        rules: [{ required: true, message: '请选择' }],
        hocChild: { hocType: 'HocDatePicker' },
      },
      {
        name: 'beginDate',
        label: '开始日期',
        rules: [{ required: true, message: '请选择' }],
        hocSpan: 12,
        hocChild: { hocType: 'HocDatePicker', hocLt: 'endDate' },
      },
      {
        name: 'endDate',
        label: '结束日期',
        rules: [{ required: true, message: '请选择' }],
        hocSpan: 12,
        hocChild: { hocType: 'HocDatePicker', hocGt: 'beginDate' },
      },
      {
        name: 'payAmountWithTax',
        label: '计划付款额含税',
        rules: [{ required: true, message: '请输入' }],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'taxRate',
        label: '税率%',
        rules: [{ required: true, message: '请输入' }],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountTax',
        label: '计划付款税额',
        hocComputed: [
          'payAmountWithTax, taxRate',
          ([payAmountWithTax, taxRate]) => {
            console.log('leaseLifeMonth', payAmountWithTax, taxRate)
            return 1
          },
        ],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountNoTax',
        label: '计划付款额不含税',
        hocComputed: [
          'payAmountWithTax, taxRate,payAmountNoTax',
          ([payAmountWithTax, taxRate, payAmountNoTax]) => {
            console.log(
              'leaseLifeMonth',
              payAmountWithTax,
              taxRate,
              payAmountNoTax
            )
            return 1
          },
        ],
        hocChild: { hocType: 'InputNumber', precision: 2, disabled: true },
      },
      {
        wrapperCol: { span: 16, offset: 8 },
        hocChild: <Button htmlType="submit">123</Button>,
      },
    ],
  }

  window.kkk1 = formDef1

  function TestOther1() {
    formDef1.refForm.submit()
  }
  function TestOther2() {
    formDef2.refForm.submit()
  }
  function TestShowProps(props) {
    console.log(props)
    return <div>nothing</div>
  }

  return (
    <div>
      <div className={ss.box}>
        <FormRender formDef={formDef1}></FormRender>
      </div>
      <div className={ss.box}>
        <FormRender formDef={formDef2}></FormRender>
      </div>
      <div className={ss.box}>
        <Button onClick={TestOther1}>触发Form1</Button>
        <Button onClick={TestOther2}>触发Form2</Button>
      </div>
    </div>
  )
}
