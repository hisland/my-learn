;(async function() {
  const sub1 = await import('./sub1.js')
  const sub2 = await import('./sub2.js')
  console.log(sub1)
  console.log(sub2)
  console.log('entry1')
})()
