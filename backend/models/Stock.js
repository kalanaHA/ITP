const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let stockSchema = new Schema({
  stockid:{
    type : String,
    required: true
 },
 itemcode: {
    type : String,
    required: true
 },
 quntity: {
     type : Number,
     required: true
  },
 price: {
     type : Number,
     required: true
  },
 discount: {
     type : Number,
     required: true

}
},
{
    collection: 'stocks'
  })

module.exports = mongoose.model('Stock', stockSchema)