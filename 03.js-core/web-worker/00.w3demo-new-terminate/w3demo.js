let ii = 0

function timedCount() {
  ii = ii + 1
  postMessage(ii)
  setTimeout(timedCount, 1000)
}

timedCount()
