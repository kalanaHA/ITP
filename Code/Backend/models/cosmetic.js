const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cosmaticSchema = new Schema({

    date: {
       type : String,
       required: true
    },
    time: {
       type : String,
       required: true
    },
    con_no: {
        type : Number,
        required: true
     },
    cusid: {
        type : Number,
        required: true
     },
    payid: {
        type : Number,
        required: true
     },
    quntity: {
        type : Number,
        required: true
     },
    reason: {
        type : String,
        required: true
     }
})

const Cosmetic = mongoose.model("Cosmetic",cosmaticSchema);

module.exports = Cosmetic;