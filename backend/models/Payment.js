const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paymentSchema = new Schema({

 card_number: {
   type : String,
   required: true
},
type: {
  type : String,
  required: true
},
holders_name: {
   type : String,
   required: true
},
cvv: {
    type : String,
    required: true
 },
 expiry_date: {
    type : String,
    required: true
  }
},

{
    collection: 'payments'
  })

module.exports = mongoose.model('Payment', paymentSchema)