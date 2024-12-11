import * as d3 from 'd3'

// 定义节点和链接的类型
interface Node {
  id: string
  group: number
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
  image: string // 添加图片 URL 属性
  width?: number
  height?: number
}

interface Link {
  source: string | Node
  target: string | Node
}

// 数据
const nodes: Node[] = [
  { id: '1', group: 1, image: '../static/d3-img/lv0.png', width: 254, height: 260 },
  { id: '2', group: 2, image: '../static/d3-img/lv1-1.png', width: 100, height: 100 },
  { id: '3', group: 2, image: '../static/d3-img/lv1-1.png', width: 100, height: 100 },
  { id: '3-1', group: 2, image: '../static/d3-img/lv1-1.png', width: 100, height: 100 },
  { id: '4', group: 3, image: '../static/d3-img/lv1-2.png', width: 100, height: 100 },
  { id: '5', group: 3, image: '../static/d3-img/lv1-2.png', width: 100, height: 100 },
]

const links: Link[] = [
  { source: '1', target: '2' },
  { source: '1', target: '3' },
  { source: '2', target: '4' },
  { source: '3', target: '5' },
  { source: '3', target: '3-1' },
]

// 获取 SVG 容器
const svg = d3.select<SVGSVGElement, unknown>('svg')
const width = window.innerWidth
const height = window.innerHeight

// 力导向布局
const simulation = d3
  .forceSimulation<Node>(nodes)
  .force(
    'link',
    d3
      .forceLink<Node, Link>(links)
      .id((d) => d.id)
      .distance((link, index, links) => {
        return Math.max(link.source.width!, link.source.height!) + 30
      })
  )
  .force('charge', d3.forceManyBody().distanceMin(10).strength(-900))
  .force('center', d3.forceCenter(width / 2, height / 2))

// 绘制链接线
const link = svg
  .append('g')
  .attr('stroke', '#aaa')
  .attr('stroke-width', 2)
  .selectAll('line')
  .data(links)
  .join('line')

// 使用图片绘制节点
const node = svg
  .append('g')
  .selectAll('image')
  .data(nodes)
  .join('image')
  .attr('xlink:href', (d) => d.image) // 设置图片路径
  .attr('width', (d) => {
    console.log('d: ', d)
    return d.width
  }) // 图片宽度
  .attr('height', (d) => d.height) // 图片高度
  .attr('x', (d) => d.x! - d.width! / 2) // 居中图片
  .attr('y', (d) => d.y! - d.height! / 2) // 居中图片
  .call(
    d3
      .drag<SVGImageElement, Node>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
  )

// 更新图片和链接位置
simulation.on('tick', () => {
  link
    .attr('x1', (d) => (d.source as Node).x!)
    .attr('y1', (d) => (d.source as Node).y!)
    .attr('x2', (d) => (d.target as Node).x!)
    .attr('y2', (d) => (d.target as Node).y!)

  node
    .attr('x', (d) => d.x! - d.width! / 2) // 图片需要居中调整位置
    .attr('y', (d) => d.y! - d.height! / 2)
})

// 拖拽行为
function dragstarted(event: d3.D3DragEvent<SVGImageElement, Node, unknown>, d: Node): void {
  if (!event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

function dragged(event: d3.D3DragEvent<SVGImageElement, Node, unknown>, d: Node): void {
  d.fx = event.x
  d.fy = event.y
}

function dragended(event: d3.D3DragEvent<SVGImageElement, Node, unknown>, d: Node): void {
  if (!event.active) simulation.alphaTarget(0)
  d.fx = null
  d.fy = null
}
