const express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = 4000;
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
