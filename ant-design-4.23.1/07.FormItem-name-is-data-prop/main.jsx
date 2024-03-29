import ReactDOM from 'react-dom'
import React, { Component } from "react";
import { DatePicker, Button, Input, Drawer, Table, Form } from "antd";

const FormItem = Form.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (values) => {
    console.log("ok", values);
  };
  onFinishFailed = (values) => {
    console.log("fial", values);
  };
  render() {
    return (
      <div>
        <div>FormItem 的 name 是属性名 prop</div>
        <Form onFinish={this.onFinish} onFinishFailed={this.onFinish}>
          <FormItem label="abc" name="hallo">
            <Input></Input>
          </FormItem>
          <FormItem label="abc" name="aa.bb">
            <Input></Input>
          </FormItem>
          <FormItem label="abc" name="aa.bb">
            <Button htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
