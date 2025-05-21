import * as d3 from 'd3'

d3.select(document.body).style('background', 'cyan')
d3.select('#test1').style('background', 'pink')
d3.select('#test2').style('background', 'yellow')
d3.select('#test3').style('background', 'green')

const plist = d3.select('#test3')
  .selectAll('p')
  .on('click', (event) => {
    const list1 = ['red', 'blue', 'cyan', 'magenta', 'black', 'white']
    d3.select(event.currentTarget).style('color', list1[Math.floor(Math.random() * list1.length)])
  })

  console.log('plist: ', plist)
