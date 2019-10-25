const http = require('http')

http
  .createServer(function(reqMsg, resObj) {
    console.log(
      'reqMsg is http.IncomingMessage: ',
      reqMsg instanceof http.IncomingMessage
    )
    console.log(
      'resObj is http.ServerResponse: ',
      resObj instanceof http.ServerResponse
    )

    resObj.writeHead(200, { 'Content-Type': 'text/plain' })
    resObj.write('response from 9020\n')
    resObj.end()
  })
  .listen(9020, function() {
    console.log('listen: ', 9020)
  })
