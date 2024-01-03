let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// payment Model
let paymentSchema = require('../models/Payment');

// CREATE payment
router.route('/create-payment').post((req, res, next) => {
 paymentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ payments
router.route('/').get((req, res) => {
 paymentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single payment
router.route('/edit-payment/:id').get((req, res) => {
 paymentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update payment
router.route('/update-payment/:id').put((req, res, next) => {
 paymentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('payment updated successfully !')
    }
  })
})

// Delete payment
router.route('/delete-payment/:id').delete((req, res, next) => {
 paymentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;