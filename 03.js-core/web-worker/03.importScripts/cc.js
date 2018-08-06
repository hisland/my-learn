let jj = 0

function timedCount() {
  jj = jj + 1
  postMessage({
    some: 'name',
    count: jj
  })
  setTimeout(timedCount, 1000)
}

timedCount()
