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
      // return {}
      return {
        leaseTermSign: true,
        leaseBeginDate: '2020-11-01T00:00:00+08:00',
        leaseEndDate: '2020-11-30T00:00:00+08:00',
        leaseLifeMonth: 29,
        leaseAssetSign: true,
        assetName: '123',
        leaseContractSign: true,
        assetArea: 1,
        assetQuantity: 1,
        leaseWithTax: 35,
        leaseNoTax: 34,
        leaseTax: 33,
      }
    },
    hocGenResultValue(values) {},
    hocFormRef: null, // 界面渲染之后, 会自动把 form 引用挂在这里, 后续可以 formDef.hocFormRef.xxx
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
        },
      },
      {
        name: 'leaseBeginDate',
        label: '租赁日期从',
        hocRules: [
          'leaseTermSign',
          ([leaseTermSign]) => {
            return {
              resetState: false,
              newRules: [{ required: leaseTermSign, message: '请选择' }],
            }
          },
        ],
        hocChild: { hocType: 'HocDatePicker', hocLt: 'leaseEndDate' },
      },
      {
        name: 'leaseEndDate',
        label: '租赁日期至',
        hocRules: [
          'leaseTermSign',
          ([leaseTermSign]) => {
            return {
              resetState: false,
              newRules: [{ required: leaseTermSign, message: '请选择' }],
            }
          },
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
            return moment
              .duration(moment(leaseEndDate) - moment(leaseBeginDate))
              .asDays()
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
        hocRules: [
          'leaseAssetSign',
          ([leaseAssetSign]) => {
            return {
              resetState: false,
              newRules: [{ required: leaseAssetSign, message: '请选择' }],
            }
          },
        ],
        hocChild: { hocType: 'Input' },
      },
      {
        name: 'assetCategoryId',
        label: '租赁资产类别',
        hocRules: [
          'leaseAssetSign',
          ([leaseAssetSign]) => {
            return {
              resetState: false,
              newRules: [{ required: false, message: '请选择' }],
              // newRules: [{ required: leaseAssetSign, message: '请选择' }],
            }
          },
        ],
        hocChild: { hocType: 'Lov' },
      },
      {
        name: 'leaseContractSign',
        label: '租赁合同',
        rules: [{ required: true, message: '请选择' }],
        hocComputed: [
          'leaseTermSign, leaseAssetSign',
          ([leaseTermSign, leaseAssetSign]) => {
            return leaseTermSign && leaseAssetSign
          },
        ],
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
        hocRules: [
          'leaseContractSign,assetQuantity',
          ([leaseContractSign, assetQuantity]) => {
            console.log('aa', leaseContractSign, assetQuantity)
            const required = !(leaseContractSign && assetQuantity)
            return {
              resetState: required === false,
              newRules: [{ required, message: '租赁资产面积/数量 必填一项' }],
            }
          },
        ],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'assetQuantity',
        label: '租赁资产数量',
        hocRules: [
          'leaseContractSign, assetArea',
          ([leaseContractSign, assetArea]) => {
            console.log('bb', leaseContractSign, assetArea)
            const required = !(leaseContractSign && assetArea)
            return {
              resetState: required === false,
              newRules: [{ required, message: '租赁资产面积/数量 必填一项' }],
            }
          },
        ],
        hocChild: { hocType: 'InputNumber' },
      },
      {
        name: 'assetUnit',
        label: '租赁资产单位',
        rules: [{ required: false, message: '请选择' }],
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

  window.kkk_LeaseRecognition = formDef1

  function TestOther1() {
    formDef1.hocFormRef.submit()
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
        <Button onClick={TestOther1}>提交Form</Button>
        <Button
          onClick={() => {
            // isRequired = !isRequired
            setRequired(!isRequired)
          }}
        >
          re-render
        </Button>
      </div>
    </div>
  )
}
