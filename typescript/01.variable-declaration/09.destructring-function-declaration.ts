type CC = { aa?: string; bb?: number }
function foo({ aa = 'def: ', bb = 10 }: CC = {}): void {
  console.log('aa: ', aa)
  console.log('bb: ', bb)
}

foo()
foo({ aa: 'yes' })
foo({ aa: 'yes', bb: 30 })

export const preventVSCodeError = 1
