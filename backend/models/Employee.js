const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  first_name: {
    type : String,
    required: true
 },
 last_name: {
    type : String,
    required: true
 },
 contact_number: {
   type : String,
   required: true
},
 email: {
     type : String,
     required: true
  },
 nic: {
     type : String,
     required: true
  },
 address: {
     type : String,
     required: true
  },
 date_of_join: {
     type : String,
     required: true
  }
},

{
    collection: 'employee'
  })

module.exports = mongoose.model('Employee', employeeSchema)