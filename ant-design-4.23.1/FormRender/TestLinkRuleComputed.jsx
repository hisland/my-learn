import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import ss from './style.module.scss'

import { Button } from 'antd'

import FormRender from './FormRender/FormRender.jsx'

export default function SwitchDisabled(props) {
  console.log('SwitchDisabled render')

  const formDef1 = {
    hocOnChange() {},
    hocGenInitialValue() {
      return {
        prepaymentFlag: true,
      }
    },
    hocGenResultValue(values) {},
    hocFormRef: null, // 界面渲染之后, 会自动把 form 引用挂在这里, 后续可以 formDef.hocFormRef.xxx
    form: {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    itemSpan: 24,
    items: [
      {
        name: 'prepaymentFlag',
        label: '是否预付',
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
        name: 'payAmountWithTax',
        label: '计划付款额含税',
        // rules: [{ required: true, message: '请选择' }],
        hocRules: [
          'prepaymentFlag',
          ([prepaymentFlag]) => {
            console.log('hocRules', 'payAmountWithTax')
            return {
              resetState: !prepaymentFlag,
              newRules: [{ required: prepaymentFlag, message: '请选择' }],
            }
          },
        ],
        hocChild: {
          hocType: 'InputNumber',
          precision: 2,
        },
      },
      {
        name: 'taxRate',
        label: '税率%',
        hocRules: [
          'prepaymentFlag',
          ([prepaymentFlag]) => {
            console.log('hocRules', 'taxRate')
            return {
              resetState: !prepaymentFlag,
              newRules: [{ required: prepaymentFlag, message: '请选择' }],
            }
          },
        ],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountTax',
        label: '计划付款税额',
        hocComputed: [
          'payAmountWithTax, taxRate',
          ([payAmountWithTax, taxRate]) => {
            console.log('hocComputed', payAmountWithTax, taxRate)
            const rs = payAmountWithTax - payAmountWithTax / (1 + taxRate / 100)
            return isNaN(rs) ? null : rs.toFixed(2) - 0
          },
        ],
        hocChild: { hocType: 'InputNumber', precision: 2 },
      },
      {
        name: 'payAmountNoTax',
        label: '计划付款额不含税',
        rules: [{ required: false, message: '请选择' }],
        hocComputed: [
          'payAmountWithTax, payAmountTax',
          ([payAmountWithTax, payAmountTax]) => {
            console.log('hocComputed', payAmountWithTax, payAmountTax)
            const rs = payAmountWithTax - payAmountTax
            return isNaN(rs) ? null : rs
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

  window.kkk_LinkRuleComputed = formDef1

  function TestOther1() {
    formDef1.hocFormRef.submit()
  }

  return (
    <div>
      <div className={ss.box}>
        <FormRender formDef={formDef1}></FormRender>
      </div>
      <div className={ss.box}>
        <Button onClick={TestOther1}>触发Form1</Button>
      </div>
    </div>
  )
}
