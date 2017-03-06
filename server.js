var express = require('express');
var app = express();

var bruleSayings = require('./bruleArray');

app.use(express.static(__dirname + '/public'));

app.get('/bruleSayings', function(req, res) {
  res.send(bruleSayings);
});

app.get('/randomSaying', function(req, res) {
    res.send(bruleSayings[Math.floor(Math.random()*bruleSayings.length)]);
});

var server = app.listen(4000, function() {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
