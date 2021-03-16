const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (aa.ts)`)
}

// addEventListener('load') 不会被覆盖, 此处正常执行
window.addEventListener('load', handler)
// addEventListener('unload') 也处正常执行
window.addEventListener('unload', handler)

// onload 比 addEventListener('load') 先执行, 但是只能赋值一个, 此处被 bb.ts 覆盖
window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (aa.ts)`)
}

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (aa.ts)`)
}

console.log('log from aa.ts')

export const preventVSCodeError = 1
