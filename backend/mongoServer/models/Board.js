const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
  writer: {
    type: String,
    trim:true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
  },
  realContent:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
  
module.exports = mongoose.model('Board', BoardSchema);