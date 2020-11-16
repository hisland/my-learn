export function genUidFactory(prefix = 'tmp-key') {
  let uidCount = 0
  return () => `${prefix}-${uidCount++}`
}

export function genDepArray(depStr) {
  return depStr.split(/, */)
}

export function genTriggerMap(depMap) {
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

export function genRunSerie(beginName, triggerMap) {
  const runSerie = new Set()
  const deep = (triggerName) => {
    for (const depName of triggerMap.get(triggerName)) {
      if (runSerie.has(depName) || depName === beginName) continue
      runSerie.add(depName)
      if (triggerMap.has(depName)) {
        deep(depName)
      }
    }
  }
  triggerMap.has(beginName) && deep(beginName)
  return runSerie
}

export function checkCycleDep(depMap, throwError = false) {
  for (const [computedKey, depSet] of depMap) {
    innerDeep(depSet, [computedKey])
  }
  function innerDeep(depSet, prevArray) {
    for (const depKey of depSet) {
      if (prevArray.includes(depKey)) {
        prevArray.push(depKey)
        if (throwError) {
          throw Error(`检测到循环依赖 ${prevArray.join('->')}`)
        } else {
          console.log(`检测到循环依赖 ${prevArray.join('->')}`)
          return
        }
      }
      if (depMap.has(depKey)) {
        innerDeep(depMap.get(depKey), [...prevArray, depKey])
      }
    }
  }
}
