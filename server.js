// server.js

// modules ===================================
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Body Parser Setup
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//port setup
var PORT = process.env.PORT || 7900;

//connect to mongoDB
var mongoose = require('mongoose');
var db = require('./config/config.js');

// HEROKU DB
if(process.env.NODE_ENV === 'production'){
  console.log(process.env.MONGOLAB_URI);
mongoose.connect(db.url); // connect to our database
}
else {
  // LOCAL DB
  console.log("connected locally");
  mongoose.connect('mongodb://localhost/profileContact');
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

var Message = require('./server/models/messageModel.js');

//allow cors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

//setup logger
var logger = require('morgan');
app.use(logger('dev'));

//set the static file location
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(process.cwd() +'/public/index.html');
});

//Database Calls ===========================

app.post('/submitMessage', function(req, res){
  var message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  message.save(function(err){
    if(err) res.send(err);
    return res.send();
  });
});

//start app ================================
http.listen(PORT, function(){
  console.log("Checkout " + PORT);
});