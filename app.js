var express = require('express');
var app = express();
var db = require('./db');
var VerifyToken = require('./auth/VerifyToken');
var AuthController = require('./auth/AuthController');
var cookieParser = require('cookie-parser')


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/api/auth', AuthController);
app.use(cookieParser());



app.get('/', function(req, res) {
  res.render('signin');
});


app.get('/train', VerifyToken, function(req, res) {
  res.render('train');
});

app.get('/models', VerifyToken, function(req, res) {
  res.render('models');
});

app.get('/datasets', VerifyToken, function(req, res) {
  res.render('datasets');
});

module.exports = app;