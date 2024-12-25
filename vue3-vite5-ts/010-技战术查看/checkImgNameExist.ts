import ddd from './test.json' with { type: 'json' }

ddd.data.forEach((item) => {
  //   console.log(item.attCkId)
  //   console.log(item.attCkName)
  const path = `./img/图标/${item.attCkName}.svg`
  try {
    const rs1 = Deno.statSync(path)
    console.log('exist: ', path)
  } catch (error) {
    // console.log(error)
    console.log('not exist: ', path, item.attCkName)
  }
  //   item.technology.forEach((item2) => {
  //     console.log(item2.attCkName)
  //   })
})
