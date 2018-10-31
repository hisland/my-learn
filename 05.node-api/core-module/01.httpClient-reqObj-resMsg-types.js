const http = require('http')

http
  .createServer(function(reqMsg, resObj) {
    resObj.writeHead(200, { 'Content-Type': 'text/plain' })
    resObj.write('response from 9020\n')
    resObj.end()
  })
  .listen(9020, function() {
    console.log('listen: ', 9020)
  })

const reqObj = http.request('http://localhost:9020/abc', function(resMsg) {
  console.log(
    'resMsg is http.IncomingMessage: ',
    resMsg instanceof http.IncomingMessage
  )
})
reqObj.on('error', function(rs) {
  console.log(rs)
})
reqObj.end()

console.log(
  'reqObj is http.ClientRequest: ',
  reqObj instanceof http.ClientRequest
)
