const express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', 'view');


app.get('/', function(req, res) {
  res.render('index');
})


app.get('/locals', function(req, res) {
  res.json(app.locals);
})


app.get('/top', function(req, res) {
  var str = 'im top';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})


var sub = express();
sub.get('/test', function(req, res) {
  var str = 'im test';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})
app.use('/sub', sub);


var sub2 = express();
sub2.get('/test', function(req, res) {
  var str = 'im multi sub';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})
sub2.on('mount', function(parent) {
  console.log('sub2 Mounted');
})
app.use(['/cc', '/god'], sub2)



app.param('tt', function(req, res, next, value) {
  console.log(value);
  req.tt = {
    value: value
  }
  next();
})
app.get('/tt/:tt', function(req, res) {
  res.json(req.tt);
})
app.get('/kk/:tt', function(req, res) {
  res.json(req.tt);
})



app.route('/3ks').all(function(req, res, next) {
  if (req.query.god == '333') {
    res.send('with god url: ' + req.url);
  } else {
    next();
  }
}).get(function(req, res, next) {
  res.send('3ks other url: ' + req.url);
})



app.get('/req/:id', function(req, res, next) {
  console.log(req.params);
  console.log(req.route);
  res.json(req.params)
})



app.get('/json', function(req, res, next) {
  res.json({
    test: 'json'
  })
})
app.get('/jsonp', function(req, res, next) {
  res.jsonp({
    test: 'jsonp'
  })
})


var router = express.Router();
router.get('/router/:name', function(req, res) {
  res.send('name: ' + req.params.name);
})
app.use(router);
var router2 = express.Router();
router2.get('/router/:name', function(req, res) {
  res.send('sub name: ' + req.params.name);
})
app.use('/sub', router2);



app.get('/get/must/all/match', function(req, res, next) {
  var str = 'im get/must/all/match';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})
app.get('/get/must/all/match/another', function(req, res, next) {
  var str = 'im get/must/all/match/another';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})



app.use('/use/best/match', function(req, res, next) {
  var str = 'im use/best/match';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})
app.use('/use/best/match/inner', function(req, res, next) {
  var str = 'im use/best/match/inner';
  str += '<br>';
  str += 'req.url: ' + req.url;
  str += '<br>';
  str += 'req.originalUrl: ' + req.originalUrl;
  str += '<br>';
  str += 'req.baseUrl: ' + req.baseUrl;
  res.send(str);
})



app.use(function(req, res) {
  res.send('any other url: ' + req.url);
})


var port = 4000;
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
