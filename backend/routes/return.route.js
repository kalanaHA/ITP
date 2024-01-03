let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// return Model
let returnSchema = require('../models/Return');

// CREATE return
router.route('/create-return').post((req, res, next) => {
 returnSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ returns
router.route('/').get((req, res) => {
 returnSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single return
router.route('/edit-return/:id').get((req, res) => {
 returnSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update return
router.route('/update-return/:id').put((req, res, next) => {
 returnSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('return updated successfully !')
    }
  })
})

// Delete return
router.route('/delete-return/:id').delete((req, res, next) => {
 returnSchema.findByIdAndRemove(req.params.id, (error, data) => {
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