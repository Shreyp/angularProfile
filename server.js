// server.js

// modules ===================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//setup logger
app.use(logger('dev'));

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

//set the static file location
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(process.cwd() +'/public/index.html');
});

//middleware
app.use(bodyParser.json()); //get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));

//Database Calls ===========================

// var db = mongoose.connection;

// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });

var Message = require('./server/models/messageModel.js');

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
app.listen(PORT, function() {
  console.log("Check out ", PORT);
});
