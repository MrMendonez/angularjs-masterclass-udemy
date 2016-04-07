var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 3060;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/0430-ng-include.html');
});

app.listen(PORT, function() {
  console.log("Listening on ", PORT);
});