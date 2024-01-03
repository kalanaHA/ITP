const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let supplySchema = new Schema({
  item: {
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
 phoneno: {
     type : String,
     required: true
  },
 
 username: {
     type : String,
     required: true
  }
},

{
    collection: 'supply'
  })

module.exports = mongoose.model('Supply', supplySchema)