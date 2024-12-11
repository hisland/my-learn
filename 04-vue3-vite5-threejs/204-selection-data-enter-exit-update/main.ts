import * as d3 from 'd3'

const svg = d3.select('body').append('svg').attr('width', 400).attr('height', 200)

function update(data) {
  // 绑定数据到矩形
  const rects = svg.selectAll('rect').data(data)
  console.log('rects: ', rects)

  // 处理新增元素
  const rects1 = rects
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
      console.log('enter attr x d i: ', d, i)
      return i * 40
    }) // 每个矩形的 x 位置
    .attr('y', 50)
    .attr('width', 30)
    .attr('height', (d) => {
      console.log('enter d: ', d)
      return d
    })
    .attr('fill', 'steelblue')

  // 更新已有元素
  rects
    .attr('height', (d, i) => {
      console.log('update d i: ', d, i)
      return d
    })
    .attr('fill', 'orange')

  // 处理移除元素
  const rects2 = rects.exit().remove()
}

document.getElementById('btn1').onclick = () => {
  // 初始数据
  const data = [50, 100, 150]
  update(data)
}
document.getElementById('btn2').onclick = () => {
  // 初始数据
  const data = [80, 120]
  update(data)
}
document.getElementById('btn3').onclick = () => {
  // 初始数据
  const data = [40, 60, 80, 100]
  update(data)
}

document.getElementById('btn4').onclick = () => {
  // 初始数据
  const data = []
  update(data)
}
