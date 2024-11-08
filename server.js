var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
res.render('pages/home');
});

app.listen(8080);