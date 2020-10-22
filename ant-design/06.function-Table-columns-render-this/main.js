const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd
const { Table } = antd
const { useState } = React

function App() {
  const dataSource = [
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
  ]

  const columns = [
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
  ]

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys, selectedRows)
    setSelectedRowKeys(newSelectedRowKeys, selectedRows)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <div>
      <div>this 都是 undefined</div>
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
        rowKey="otherKey"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
