let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// delivery Model
let deliverySchema = require('../models/delivery');

// CREATE delivery
router.route('/create-delivery').post((req, res, next) => {
 deliverySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ delivery
router.route('/').get((req, res) => {
 deliverySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single delivery
router.route('/edit-delivery/:id').get((req, res) => {
 deliverySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update delivery
router.route('/update-delivery/:id').put((req, res, next) => {
 deliverySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('delivery updated successfully !')
    }
  })
})

// Delete delivery
router.route('/delete-delivery/:id').delete((req, res, next) => {
 deliverySchema.findByIdAndRemove(req.params.id, (error, data) => {
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