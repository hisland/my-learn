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

export default function LeaseRecognition(props) {
  console.log('LeaseRecognition render')

  const [isRequired, setRequired] = useState(false)

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
    items: [
      {
        name: 'leaseTermSign',
        label: '明确租赁期限',
        rules: [{ required: true, message: '请选择' }],
        hocChild: {
          hocType: 'Select',
          hocOptions: [
            { value: true, label: '是' },
            { value: false, label: '否' },
          ],
          onChange: (value, option) => {
            console.log(value, formDef1.refForm.getFieldValue('leaseTermSign'))
          },
        },
      },
      {
        name: 'leaseBeginDate',
        label: '租赁日期从',
        dependencies: ['leaseTermSign'],
        rules: [
          (form) => ({
            required: form.getFieldValue('leaseTermSign'),
            message: '请选择',
          }),
        ],
        hocChild: { hocType: 'HocDatePicker', hocLt: 'leaseEndDate' },
      },
      {
        name: 'leaseEndDate',
        label: '租赁日期至',
        dependencies: ['leaseTermSign'],
        rules: [
          (form) => ({
            required: form.getFieldValue('leaseTermSign'),
            message: '请选择',
          }),
        ],
        hocChild: { hocType: 'HocDatePicker', hocGt: 'leaseBeginDate' },
      },
      {
        name: 'leaseLifeMonth',
        label: '租赁期限（月）',
        hocComputed: [
          'leaseBeginDate, leaseEndDate',
          ([leaseBeginDate, leaseEndDate]) => {
            console.log('leaseLifeMonth', leaseBeginDate, leaseEndDate)
            return 1
          },
        ],
        hocChild: { hocType: 'InputNumber', disabled: true },
      },
      {
        name: 'leaseAssetSign',
        label: '识别租赁资产',
        rules: [{ required: true, message: '请选择' }],
        hocChild: {
          hocType: 'Select',
          hocOptions: [
            { value: true, label: '是' },
            { value: false, label: '否' },
          ],
        },
      },
      {
        name: 'assetName',
        label: '资产名称',
        rules: [{ required: true, message: '请输入' }],
        hocChild: { hocType: 'Input' },
      },
      {
        name: 'assetCategoryId',
        label: '租赁资产类别',
        rules: [{ required: true, message: '请选择' }],
        hocChild: { hocType: 'Lov' },
      },
      {
        name: 'leaseContractSign',
        label: '租赁合同',
        rules: [{ required: true, message: '请选择' }],
        hocChild: {
          disabled: true,
          hocType: 'Select',
          hocOptions: [
            { value: true, label: '是' },
            { value: false, label: '否' },
          ],
        },
      },
      {
        name: 'assetPosition',
        label: '资产位置',
        rules: [{ required: false, message: '请输入' }],
        hocChild: { hocType: 'Input' },
      },
      {
        name: 'assetArea',
        label: '租赁资产面积',
        rules: [{ required: true, message: '请输入' }],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'assetQuantity',
        label: '租赁资产数量',
        rules: [{ required: true, message: '请输入' }],
        hocChild: { hocType: 'InputNumber' },
      },
      {
        name: 'assetUnit',
        label: '租赁资产单位',
        rules: [{ required: true, message: '请选择' }],
        hocChild: {
          hocType: 'ValueListSelect',
          code: 'ASSET_ENTITY_MEASURE_UNIT',
        },
      },
      {
        name: 'leaseWithTax',
        label: '租赁金额含税',
        hocChild: { hocType: 'InputNumber', precision: 2, disabled: true },
      },
      {
        name: 'leaseNoTax',
        label: '租赁金额不含税',
        hocChild: { hocType: 'InputNumber', precision: 2, disabled: true },
      },
      {
        name: 'leaseTax',
        label: '租赁税额',
        hocChild: { hocType: 'InputNumber', precision: 2, disabled: true },
      },
      {
        name: 'memo',
        label: '备注',
        hocChild: { hocType: 'TextArea' },
      },
    ],
  }

  window.kkk1 = formDef1

  function TestOther1() {
    formDef1.refForm.submit()
  }
  function TestShowProps(props) {
    console.log(props)
    return <div>nothing</div>
  }

  return (
    <div>
      <div className={ss.box2}>
        <FormRender formDef={formDef1}></FormRender>
      </div>
      <div className={ss.box}>
        <Button onClick={TestOther1}>触发Form1</Button>
        <Button
          onClick={() => {
            // isRequired = !isRequired
            setRequired(!isRequired)
          }}
        >
          toggle
        </Button>
      </div>
    </div>
  )
}
