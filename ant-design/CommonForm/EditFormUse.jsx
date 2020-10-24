import React, { Component } from 'react'
import EditForm from './EditForm'

class CommonFormUse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: {},
      items: [],
    }
  }

  componentDidMount() {
    this.SetItems()
  }

  DoSave = (newObj, oldObj) => {
    console.log(newObj, oldObj)
  }
  SetItems = () => {
    this.setState({
      items: [
        {
          name: 'leaseTermSign',
          FormItemOptions: {
            label: '明确租赁期限',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'Select',
          typeOptions: { placeholder: '请选择' },
          optionList: [
            { label: '显示1', value: 'val1' },
            { label: '显示2', value: 'val2' },
            { label: '显示3', value: 'val3' },
          ],
        },
        {
          name: 'leaseBeginDate',
          FormItemOptions: {
            label: '租赁日期从',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'DatePicker',
          typeOptions: {
            precision: 2,
            style: { width: '100%' },
            placeholder: '请选择',
            disabledDate: null,
          },
        },
        {
          name: 'leaseEndDate',
          FormItemOptions: {
            label: '租赁日期至',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'DatePicker',
          typeOptions: {
            precision: 2,
            style: { width: '100%' },
            placeholder: '请选择',
            disabledDate: null,
          },
        },

        {
          name: 'leaseLifeMonth',
          FormItemOptions: {
            label: '租赁期限（月）',
            rules: [],
          },
          type: 'Input',
          typeOptions: {
            placeholder: '请输入',
            disabled: true,
          },
        },
        {
          name: 'leaseAssetSign',
          FormItemOptions: {
            label: '识别租赁资产',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'Select',
          typeOptions: { placeholder: '请选择' },
          optionList: [
            { label: '是', value: 'val1' },
            { label: '否', value: 'val2' },
          ],
        },
        {
          name: 'assetName',
          FormItemOptions: {
            label: '资产名称',
            rules: [],
          },
          type: 'Input',
          typeOptions: {
            placeholder: '请输入',
          },
        },

        {
          name: 'assetCategoryId',
          FormItemOptions: {
            label: '租赁资产类别',
            rules: [],
          },
          type: 'Input',
          typeOptions: {
            placeholder: '请输入',
          },
        },
        {
          name: 'assetPosition',
          FormItemOptions: {
            label: '资产位置',
            rules: [],
          },
          type: 'Input',
          typeOptions: {
            placeholder: '请输入',
          },
        },
        {
          name: 'assetArea',
          FormItemOptions: {
            label: '租赁资产面积',
            rules: [],
          },
          type: 'InputNumber',
          typeOptions: {
            style: { width: '100%' },
            placeholder: '请输入',
          },
        },

        {
          name: 'assetQuantity',
          FormItemOptions: {
            label: '租赁资产数量',
            rules: [],
          },
          type: 'InputNumber',
          typeOptions: {
            style: { width: '100%' },
            placeholder: '请输入',
          },
        },
        {
          name: 'assetUnit',
          FormItemOptions: {
            label: '租赁资产单位',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'Select',
          typeOptions: { placeholder: '请选择' },
          optionList: [
            { label: '单位1', value: 'val1' },
            { label: '单位2', value: 'val2' },
            { label: '单位3', value: 'val3' },
          ],
        },

        {
          name: 'leaseContractSign',
          FormItemOptions: {
            label: '租赁合同',
            rules: [{ required: true, message: '请选择' }],
          },
          type: 'Select',
          typeOptions: { placeholder: '请选择' },
          optionList: [
            { label: '合同1', value: 'val1' },
            { label: '合同2', value: 'val2' },
            { label: '合同3', value: 'val3' },
          ],
        },

        {
          name: 'amount',
          FormItemOptions: {
            label: '合同金额含税',
            rules: [],
          },
          type: 'InputNumber',
          typeOptions: {
            style: { width: '100%' },
            placeholder: '请输入',
            precision: 2,
            disabled: true,
          },
        },
        {
          name: 'amountNoTax',
          FormItemOptions: {
            label: '合同金额不含税',
            rules: [],
          },
          type: 'InputNumber',
          typeOptions: {
            style: { width: '100%' },
            placeholder: '请输入',
            precision: 2,
            disabled: true,
          },
        },
        {
          name: 'amountTax',
          FormItemOptions: {
            label: '合同税额',
            rules: [],
          },
          type: 'InputNumber',
          typeOptions: {
            style: { width: '100%' },
            placeholder: '请输入',
            precision: 2,
            disabled: true,
          },
        },

        {
          span: 16,
          name: 'memo',
          FormItemOptions: {
            label: '备注',
            rules: [],
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
          },
          type: 'TextArea',
          typeOptions: {
            style: { width: '200%' },
            placeholder: '请输入',
          },
        },
      ],
    })
  }
  onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues)
    if (changedValues.leaseTermSign) {
    }
    if (changedValues.leaseBeginDate || changedValues.leaseEndDate) {
      this.sf.form
    }
  }

  render() {
    return (
      <EditForm
        obj={this.state.obj}
        FormOptions={{}}
        onValuesChange={this.onValuesChange}
        items={this.state.items}
        // rows={this.state.rows}
        DoSave={this.DoSave}
        wrappedComponentRef={(sf) => {
          this.sf = sf
        }}
      ></EditForm>
    )
  }
}

export default CommonFormUse
