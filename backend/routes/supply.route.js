let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// supply Model
let supplySchema = require('../models/supply');

// CREATE supply
router.route('/create-supply').post((req, res, next) => {
 supplySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ supplys
router.route('/').get((req, res) => {
 supplySchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single supply
router.route('/edit-supply/:id').get((req, res) => {
  supplySchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update supply
router.route('/update-supply/:id').put((req, res, next) => {
 supplySchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('supply updated successfully !')
    }
  })
})

// Delete supply
router.route('/delete-supply/:id').delete((req, res, next) => {
 supplySchema.findByIdAndRemove(req.params.id, (error, data) => {
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