;(async function() {
  if (false) {
    const sub1 = await import('./sub1.js')
    console.log(sub1.default)
  }
  console.log('console in entry1')
})()
