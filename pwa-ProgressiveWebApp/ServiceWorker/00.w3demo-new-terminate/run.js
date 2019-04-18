let ww

function startWorker() {
  if (typeof Worker !== 'undefined') {
    if (typeof ww == 'undefined') {
      ww = new Worker('worker1.js')
    }
    ww.onmessage = function(event) {
      document.getElementById('result').innerHTML = event.data
    }
  } else {
    document.getElementById('result').innerHTML =
      'Sorry! No Web Worker support.'
  }
}

function stopWorker() {
  ww.terminate()
  ww = undefined
}
