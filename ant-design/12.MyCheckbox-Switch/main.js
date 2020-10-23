const { Component } = React
const { useState } = React
const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd
const { Table } = antd
const { Form } = antd

const FormItem = Form.Item

function App() {
  const [form] = Form.useForm()
  window.kkk = form
  const onValuesChange = (changedValues, allValues) => {
    console.log('22', changedValues, allValues)
  }
  const Show = () => {
    console.log('values', form.getFieldsValue())
  }
  return (
    <div>
      <div>Form.useForm</div>
      <div style={{ width: '500px' }}>
        <Form form={form} onValuesChange={onValuesChange}>
          <FormItem label={LabelFixWidth('属性', '140px')} name="hallo">
            <Input></Input>
          </FormItem>
          <FormItem
            label={LabelFixWidth('身高属性比较长长长', '140px')}
            name="aa.bb"
          >
            <Input></Input>
          </FormItem>
          <FormItem label={LabelFixWidth('cc', '140px')} name="cc">
            <Input></Input>
          </FormItem>
          <FormItem label={LabelFixWidth('', '140px')} colon={false}>
            <Button onClick={Show}>显示</Button>
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

function LabelFixWidth(label = '', width = '80px') {
  return <div style={{ width }}>{label}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
