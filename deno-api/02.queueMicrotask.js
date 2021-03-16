console.log(1)

queueMicrotask(() => {
  console.log('queueMicrotask lv1 1')
  queueMicrotask(() => {
    console.log('queueMicrotask lv2 1-1')
    queueMicrotask(() => {
      console.log('queueMicrotask lv3 1-1')
    })
    console.log('queueMicrotask lv2 1-2')
  })
  console.log('queueMicrotask lv1 2')
  queueMicrotask(() => {
    console.log('queueMicrotask lv2 2-1')
  })
  console.log('queueMicrotask lv1 3')
})

setTimeout(() => {
  console.log('setTimeout lv1 1')
}, 0)

console.log(2)
