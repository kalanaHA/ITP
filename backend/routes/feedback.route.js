let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// feedback Model
let feedbackSchema = require('../models/Feedback');

// CREATE feedback
router.route('/create-feedback').post((req, res, next) => {
 feedbackSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ feedbacks
router.route('/').get((req, res) => {
 feedbackSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single feedback
router.route('/edit-feedback/:id').get((req, res) => {
 feedbackSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update feedback
router.route('/update-feedback/:id').put((req, res, next) => {
 feedbackSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('feedback updated successfully !')
    }
  })
})

// Delete feedback
router.route('/delete-feedback/:id').delete((req, res, next) => {
 feedbackSchema.findByIdAndRemove(req.params.id, (error, data) => {
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