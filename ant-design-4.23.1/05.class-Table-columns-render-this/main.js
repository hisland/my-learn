const { Component } = React

const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd
const { Table } = antd
const { useState } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [
        {
          otherKey: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          otherKey: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '住址2',
          dataIndex: 'address',
          key: 'address',
          render() {
            console.log(11, this)
          },
        },
        {
          title: '住址3',
          dataIndex: 'address',
          key: 'address',
          render: () => {
            console.log(22, this)
          },
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <div>箭头函数的 this 都是指向生成时候的位置, 普通函数是 undefined</div>
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          rowKey="otherKey"
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
