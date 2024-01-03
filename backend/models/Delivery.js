const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deliverySchema = new Schema({
   
  Delivery_ID: {
    type : String,
    required: true
 },
 Delivery_date: {
    type : String,
    required: true
 },
 Quntity: {
   type : String,
   required: true
  },
 Another_TP_No: {
     type : String,
     required: true

  },
 Delivery_time: {
     type : String,
     required: true
  }
},

{
    collection: 'deliverys'
  })

module.exports = mongoose.model('Delivery',deliverySchema)