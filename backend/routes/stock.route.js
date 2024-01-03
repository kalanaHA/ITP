let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// return Model
let stockSchema = require('../models/Stock');

// CREATE return
router.route('/create-stock').post((req, res, next) => {
 stockSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ stock
router.route('/').get((req, res) => {
 stockSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single stock
router.route('/edit-stock/:id').get((req, res) => {
 stockSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update stock
router.route('/update-stock/:id').put((req, res, next) => {
 stockSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('stock updated successfully !')
    }
  })
})

// Delete stock
router.route('/delete-stock/:id').delete((req, res, next) => {
 stockSchema.findByIdAndRemove(req.params.id, (error, data) => {
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