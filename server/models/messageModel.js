var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  created: {
    type: Date,
    default: Date.now()
  },
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  }
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;