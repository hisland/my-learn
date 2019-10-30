console.log('解构 for of')

const map = new Map()
map.set('aa', 'value a')
map.set('bb', 'value b')
map.set('cc', 'value c')

for (const item of map) {
  console.log(item)
}

for (const [key, value] of map) {
  console.log(key, value)
}
