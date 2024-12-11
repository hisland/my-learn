import * as d3 from 'd3'

// 定义节点和链接的类型
interface Node {
  id: string
  group: number
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
}

interface Link {
  source: string | Node
  target: string | Node
}

// 数据
const nodes: Node[] = [
  { id: '1', label: '中心节点', group: 1 },
  { id: '11', label: '一级节点1', group: 2 },
  { id: '12', label: '一级节点2', group: 2 },
  { id: '111', label: '二级节点1', group: 3 },
  { id: '112', label: '二级节点2', group: 3 },
  { id: '113', label: '二级节点1', group: 3 },
  { id: '121', label: '三级节点2', group: 3 },
  { id: '122', label: '三级节点1', group: 3 },
  { id: '123', label: '三级节点2', group: 3 },
  { id: '1221', label: '四级节点1', group: 4 },
  { id: '12211', label: '五级节点2', group: 5 },
]

const links: Link[] = [
  { source: '1', target: '11' },
  { source: '1', target: '12' },
  { source: '11', target: '111' },
  { source: '11', target: '112' },
  { source: '11', target: '113' },
  { source: '12', target: '121' },
  { source: '12', target: '122' },
  { source: '12', target: '123' },
  { source: '123', target: '1221' },
  { source: '1221', target: '12211' },
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
      .distance(100)
  )
  .force('charge', d3.forceManyBody().strength(-300))
  .force('center', d3.forceCenter(width / 2, height / 2))

// 绘制链接线
const link = svg
  .append('g')
  .attr('stroke', '#aaa')
  .attr('stroke-width', 2)
  .selectAll('line')
  .data(links)
  .join('line')

// 绘制节点
const node = svg
  .append('g')
  .selectAll('circle')
  .data(nodes)
  .join('circle')
  .attr('r', (d) => {
    const colors = [30, 20, 10]
    return colors[d.group - 1] || 10
  })
  .attr('fill', (d) => {
    const colors = ['#ff6f61', '#6baed6', '#74c476']
    return colors[d.group - 1] || '#ccc'
  })
  .call(
    d3
      .drag<SVGCircleElement, Node>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
  )

// 添加节点标签
svg
  .append('g')
  .selectAll('text')
  .data(nodes)
  .join('text')
  .attr('x', 12)
  .attr('y', 4)
  .text((d) => d.id)
  .style('font-size', '12px')
  .style('font-family', 'Arial, sans-serif')
  .style('fill', '#333')

// 更新位置
simulation.on('tick', () => {
  link
    .attr('x1', (d) => (d.source as Node).x!)
    .attr('y1', (d) => (d.source as Node).y!)
    .attr('x2', (d) => (d.target as Node).x!)
    .attr('y2', (d) => (d.target as Node).y!)

  node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!)
})

// 拖拽行为
function dragstarted(event: d3.D3DragEvent<SVGCircleElement, Node, unknown>, d: Node): void {
  if (!event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

function dragged(event: d3.D3DragEvent<SVGCircleElement, Node, unknown>, d: Node): void {
  d.fx = event.x
  d.fy = event.y
}

function dragended(event: d3.D3DragEvent<SVGCircleElement, Node, unknown>, d: Node): void {
  if (!event.active) simulation.alphaTarget(0)
  d.fx = null
  d.fy = null
}
