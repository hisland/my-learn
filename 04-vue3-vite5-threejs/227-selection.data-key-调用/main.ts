import * as d3 from 'd3'

const svg = d3.select('body').append('svg').attr('width', 400).attr('height', 200)

let globalId = 0

type Node = {
  id: number
  height: number
}

const nodes: Node[] = [
  {
    id: 1,
    height: 30,
  },
  {
    id: 2,
    height: 30,
  },
  {
    id: 3,
    height: 30,
  },
]
update(nodes)

function update(data) {
  // 绑定数据到矩形
  const rects = svg.selectAll('rect').data(data, function (current, index, nodeList) {
    console.log('current ,index, nodeList: ', current, index, nodeList)
    return current.id
  })
  console.log('rects: ', rects)

  // 处理新增元素
  const rects1 = rects
    .enter()
    .append('rect')
    .attr('x', (data, index, list) => {
      console.log('enter attr x d i: ', data, index)
      return index * 40
    })
    .attr('y', 50)
    .attr('width', 30)
    .attr('height', (d) => {
      return d.height
    })
    .attr('fill', 'steelblue')
    .attr('id', (d) => {
      return d.id
    })

  // 更新已有元素
  rects
    .attr('x', (data, index, list) => {
      console.log('update attr x d i: ', data, index)
      return index * 40
    })
    .attr('height', (d, i) => {
      return d.height
    })
    .attr('fill', 'orange')

  // 处理移除元素
  const rects2 = rects.exit().remove()
}

document.getElementById('btn1').onclick = () => {
  nodes.length = 0
  nodes.push(
    {
      id: 3,
      height: Math.random() * 100,
    },
    {
      id: 2,
      height: Math.random() * 100,
    },
    {
      id: 4,
      height: Math.random() * 100,
    }
  )
  update(nodes)
}
document.getElementById('btn2').onclick = () => {
  nodes[0].height = Math.random() * 100
  nodes[1].height = Math.random() * 100
  nodes[2].height = Math.random() * 100
  update(nodes)
}
// document.getElementById('btn3').onclick = () => {
//   // 初始数据
//   const data = [50, 60, 80, 150]
//   update(data)
// }

// document.getElementById('btn4').onclick = () => {
//   // 初始数据
//   const data = []
//   update(data)
// }
