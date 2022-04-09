export function some() {
  console.log('some 1 1')
  if (DEBUG) {
    console.log('some 2')
  }
  console.log('some 3')
}

export function hey() {
  console.log('some 1')
  const val = SOME.DOT.KEY
  console.log(val)
  if (true) {
    console.log('some 2')
  }
  console.log('some 3')
}

// 被抖掉
function willTreeShake() {
  console.log('some 1 11')
  const val = SOME.DOT.KEY
  console.log(val)
  if (true) {
    console.log('some 2 22')
  }
  console.log('some 3 33')
}
