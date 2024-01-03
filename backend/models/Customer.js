const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
  NIC: {
    type : String,
    required: true
 },
 first_name: {
    type : String,
    required: true
 },
 last_name: {
     type : String,
     required: true
  },
 email: {
     type : String,
     required: true
  },
 TP_num: {
     type : Number,
     required: true
  },
 user_name: {
     type : String,
     required: true
  },
 password: {
     type : String,
     required: true
  }
},

{
    collection: 'customers'
  })

module.exports = mongoose.model('Customer', customerSchema)