let globalCount = 0

onmessage = function(e) {
  var workerResult = 'Result: ' + e.data[0] * e.data[1] + ' - ' + globalCount++
  postMessage(workerResult)
}
