const { Component } = React
const { useState } = React
const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd
const { Table } = antd
const { Form } = antd

const FormItem = Form.Item

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    window.kkk = this
  }
  onFinish = (values) => {
    console.log('ok', values)
  }
  onFinishFailed = (values) => {
    console.log('fial', values)
  }
  Show = () => {
    console.log('values', this.ff.getFieldsValue())
  }
  render() {
    return (
      <div>
        <div>获取 Form ref</div>
        <Form
          ref={(ff) => {
            this.ff = ff
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <FormItem label="属性" name="hallo">
            <Input></Input>
          </FormItem>
          <FormItem label="身高" name="aa.bb">
            <Input></Input>
          </FormItem>
          <FormItem name="aa.bb">
            <Button onClick={this.Show}>显示</Button>
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
