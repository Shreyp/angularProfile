// server.js

// modules ===================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//config files
var db = require('./config/db');

//setup logger
app.use(logger('dev'));

//port setup
var PORT = process.env.PORT || 7900;

//connect to mongoDB (uncomment when db.js setup)
mongoose.connect(db.url);

//set the static file location
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendFile(process.cwd() +'/public/index.html');
});


// start app ================================
// app.listen(PORT, function() {
//   console.log("Check out ", PORT);
// });

// //export app
// exports = module.exports = app;
