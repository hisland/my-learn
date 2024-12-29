import * as d3 from 'd3'

// 定义节点数据
const nodes = [
  { id: '01', pid: null, radius: 100, type: 'ip', text: '1.2.3.4' },
  { id: '02-01', pid: '01', radius: 40, type: 'lv1NormalVisit', text: '1' },
  { id: '02-01-01', pid: '02-01', radius: 30, type: 'lv2', text: '系统xx1' },
  { id: '02-01-01-01', pid: '02-01-01', radius: 30, type: 'lv3VisitType', text: 'ftp' },
  { id: '02-01-02', pid: '02-01', radius: 30, type: 'lv2', text: '系统xx2' },
  { id: '02-01-03', pid: '02-01', radius: 30, type: 'lv2', text: '系统xx3' },
  { id: '02-02', pid: '01', radius: 40, type: 'lv1AttackTarget', text: '2' },
  { id: '02-02-01', pid: '02-02', radius: 30, type: 'lv2', text: '5.6.3.4' },
  { id: '02-02-01-01', pid: '02-02-01', radius: 30, type: 'lv3AttackType', text: 'sql注入' },
  { id: '02-03', pid: '01', radius: 40, type: 'lv1Other', text: '3' },
  { id: '02-03-01', pid: '02-03', radius: 30, type: 'lv2' },
  { id: '02-03-02', pid: '02-03', radius: 30, type: 'lv2' },
  { id: '02-03-02-01', pid: '02-03-02', radius: 30, type: 'lv3OtherType', text: '大运会' },
]

// 设置 SVG 画布大小
const width = 800
const height = 800

// 创建 SVG 容器
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height)
svg
  .append('line')
  .attr('x1', '0')
  .attr('y1', height / 2 - 1)
  .attr('x2', width)
  .attr('y2', height / 2 + 1)
  .attr('stroke', 'red')
  .attr('stroke-width', 2)
svg
  .append('line')
  .attr('x1', width / 2 - 1)
  .attr('y1', 0)
  .attr('x2', width / 2 - 1)
  .attr('y2', height)
  .attr('stroke', 'red')
  .attr('stroke-width', 2)

const lv0 = svg
  .selectAll('.lv0')
  .data(nodes.filter((d) => d.pid === null))
  .enter()
  .append('g')
  .attr('class', 'lv0')
lv0
  .append('image')
  .attr('x', (d) => -d.radius)
  .attr('y', (d) => -d.radius)
  .attr('width', (d) => d.radius * 2)
  .attr('href', '../static/dlf1/lv0.png')
lv0
  .append('text')
  .attr('dominant-baseline', 'middle')
  .attr('text-anchor', 'middle')
  .attr('fill', '#fff')
  .text((d) => d.text)

const lv1 = svg
  .selectAll('.lv1')
  .data(nodes.filter((d) => d.id.split('-').length === 2))
  .enter()
  .append('g')
  .attr('class', 'lv1')

lv1
  .append('image')
  .attr('x', (d) => -d.radius)
  .attr('y', (d) => -d.radius)
  .attr('width', (d) => d.radius * 2)
  .attr('href', '../static/dlf1/lv1-2.png')
lv1
  .append('text')
  .attr('dominant-baseline', 'middle')
  .attr('text-anchor', 'middle')
  .attr('fill', '#fff')
  .attr('font-size', 12)
  .text((d) => d.text)

const lv3 = svg
  .selectAll('.lv3')
  .data(nodes.filter((d) => d.id.split('-').length === 3))
  .enter()
  .append('g')
  .attr('class', 'lv3')
lv3
  .append('image')
  .attr('x', (d) => -d.radius)
  .attr('y', (d) => -d.radius)
  .attr('width', (d) => d.radius * 2)
  .attr('href', '../static/dlf1/lv3-2.png')
lv3
  .append('text')
  .attr('dominant-baseline', 'middle')
  .attr('text-anchor', 'middle')
  .attr('fill', '#fff')
  .attr('font-size', 10)
  .text((d) => d.text || d.id)

// 创建力仿真器
const simulation = d3
  .forceSimulation(nodes)
  .force(
    'center',
    d3.forceCenter(width / 2, height / 2) // 将节点聚集到画布中心
  )
  .force(
    'collision',
    d3.forceCollide().radius((d) => d.radius + 10) // 碰撞半径完全等于圆的半径
  )
  // .force(
  //   'x',
  //   d3.forceX(width / 2).strength(0.5) // 水平方向吸引力
  // )
  // .force(
  //   'y',
  //   d3.forceY(height / 2).strength(0.5) // 垂直方向吸引力
  // )
  .on('tick', ticked)

// 更新圆的位置
function ticked() {
  lv0.attr('transform', (d) => `translate(${d.x},${d.y})`)
  lv1.attr('transform', (d) => `translate(${d.x},${d.y})`)
  lv3.attr('transform', (d) => `translate(${d.x},${d.y})`)
}
