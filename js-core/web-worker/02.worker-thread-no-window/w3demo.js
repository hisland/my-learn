let ii = 0

function timedCount() {
  ii = ii + 1
  postMessage({
    some: 'name',
    count: ii
  })
  setTimeout(timedCount, 1000)
}

timedCount()


console.log(window)
