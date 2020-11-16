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
  const obj2 = new Proxy(obj, {
    set: function (target, name, value, receiver) {
      const rs = Reflect.set(target, name, value, receiver)
      if (depMap.has(name)) {
        console.log(`${name} 是自动算计的, 直接赋值可能导致错误结果`)
      }
      tryRunDep(obj, name, triggerMap, depMap, fnMap)
      return rs
    },
  })
  return obj2
}

function genTriggerMap(depMap) {
  const triggerMap = new Map()
  for (const [computedKey, depSet] of depMap) {
    loopDep: for (const depKey of depSet) {
      const old = triggerMap.get(depKey)
      if (old) {
        for (let ii = 0; ii < old.length; ii++) {
          if (depMap.get(old[ii]).has(computedKey)) {
            // 可能前面依赖后面, 修正 trigger 顺序
            old.splice(ii, 0, computedKey)
            continue loopDep
          }
        }
        old.push(computedKey)
      } else {
        triggerMap.set(depKey, [computedKey])
      }
    }
  }
  return triggerMap
}

function checkCycleDep(depMap) {
  for (const [computedKey, depSet] of depMap) {
    innerDeep(depSet, [computedKey])
  }
  function innerDeep(depSet, prevArray) {
    for (const depKey of depSet) {
      if (prevArray.includes(depKey)) {
        prevArray.push(depKey)
        throw Error(`检测到循环依赖 ${prevArray.join('->')}`)
      }
      if (depMap.has(depKey)) {
        innerDeep(depMap.get(depKey), [...prevArray, depKey])
      }
    }
  }
}

function genRunSerie(name, triggerMap) {
  const runSerie = new Set()
  const deep = (triggerName) => {
    for (const depName of triggerMap.get(triggerName)) {
      if (runSerie.has(depName)) continue
      runSerie.add(depName)
      if (triggerMap.has(depName)) {
        deep(depName)
      }
    }
  }
  triggerMap.has(name) && deep(name)
  return runSerie
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
  // value2: [
  //   'value1',
  //   function ([value1]) {
  //     return value1 * 9
  //   },
  // ],
  value3: [
    'value1, value2',
    function ([value1, value2]) {
      return (value1 * value2) / 100
    },
  ],
  value4: [
    'value3',
    function ([value3]) {
      return value3*3
    },
  ],
}
const proxied = bindComputedDefine(obj1, computedDefine)
proxied.value1 = 10
console.log(obj1)
