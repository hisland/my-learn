import { genTriggerMap } from './util.js'
import { genRunSerie } from './util.js'
import { checkCycleDep } from './util.js'

function bindComputedDefine(obj, defineObj) {
  const defPairs = Object.entries(defineObj)

  const fnMap = new Map()
  const depMap = new Map()
  for (const [computedKey, [depKeys, genValueFn]] of defPairs) {
    fnMap.set(computedKey, genValueFn)
    const depSet = new Set(depKeys.split(/, */))
    depMap.set(computedKey, depSet)
  }
  checkCycleDep(depMap)
  console.log('depMap', depMap)

  const triggerMap = genTriggerMap(depMap)

  console.log('triggerMap', triggerMap)
  const proxied = new Proxy(obj, {
    set: function (target, name, value, receiver) {
      const rs = Reflect.set(target, name, value, receiver)
      if (depMap.has(name)) {
        console.log(`${name} 是自动算计的, 直接赋值可能导致错误结果`)
      }
      tryRunDep(obj, name, triggerMap, depMap, fnMap)
      return rs
    },
  })
  return proxied
}

function tryRunDep(obj, name, triggerMap, depMap, fnMap) {
  const runSerie = genRunSerie(name, triggerMap)
  console.log('runSerie', runSerie)
  for (const computedKey of runSerie) {
    const depSet = depMap.get(computedKey)
    const genValueFn = fnMap.get(computedKey)
    runCompute(obj, computedKey, depSet, genValueFn)
  }
}

function runCompute(obj, computedKey, depSet, genValueFn) {
  const values = Array.from(depSet).map((depKey) => obj[depKey])
  // console.log('ret', computedKey, genValueFn(values))
  obj[computedKey] = genValueFn(values)
}

const obj1 = {
  value1: 1,
  value2: 1,
  value3: 1,
  value4: 0,
  money1: 0,
  date1: 0,
  date2: 0,
  days: 0,
  money2: 0,
  money3: 0,
}
const computedDefine = {
  value3: [
    'value2',
    function ([value2]) {
      return value2 + 5
    },
  ],
  value2: [
    'value1',
    function ([value1]) {
      return value1 + 10
    },
  ],
  value1: [
    'value3',
    function ([value3]) {
      return value3 + 100
    },
  ],
  // value2: [
  //   'value1',
  //   function ([value1]) {
  //     return value1 * 9
  //   },
  // ],
  // value3: [
  //   'value1, value2',
  //   function ([value1, value2]) {
  //     return (value1 * value2) / 100
  //   },
  // ],
  // value4: [
  //   'value3',
  //   function ([value3]) {
  //     return value3*3
  //   },
  // ],
}
const proxied = bindComputedDefine(obj1, computedDefine)
proxied.value2 = 3
console.log(obj1)
