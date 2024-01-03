const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let feedbackSchema = new Schema({
  cid: {
    type : String,
    required: true
 },
 name: {
    type : String,
    required: true
 },
 email: {
     type : String,
     required: true
  },
 user_type: {
     type : String,
     required: true
  },
 contac_No: {
     type : Number,
     required: true
  },
 comment: {
     type : String,
     required: true
  }
 
},

{
    collection: 'feedbacks'
  })

module.exports = mongoose.model('Feedback', feedbackSchema)