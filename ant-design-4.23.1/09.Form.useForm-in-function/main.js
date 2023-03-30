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
  const onFinish = (values) => {
    console.log('ok', values)
  }
  const onFinishFailed = (values) => {
    console.log('fial', values)
  }
  const Show = () => {
    console.log('values', form.getFieldsValue())
  }
  return (
    <div>
      <div>Form.useForm</div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem label="属性" name="hallo">
          <Input></Input>
        </FormItem>
        <FormItem label="身高" name="aa.bb">
          <Input></Input>
        </FormItem>
        <FormItem name="aa.bb">
          <Button onClick={Show}>显示</Button>
          <Button htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
