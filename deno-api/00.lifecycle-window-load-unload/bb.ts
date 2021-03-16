import './aa.ts'

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (bb.ts)`)
}

window.addEventListener('load', handler)
window.addEventListener('unload', handler)

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (bb.ts)`)
}

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (bb.ts)`)
}

console.log('log from bb.ts')
