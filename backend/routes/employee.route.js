let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

const { Component } = require('react');
// employee Model
let employeeSchema = require('../models/Employee');

// CREATE employee
router.route('/create-employee').post((req, res, next) => {
 employeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ employee
router.route('/').get((req, res) => {
 employeeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single employee
router.route('/edit-employee/:id').get((req, res) => {
 employeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.route('/update-employee/:id').put((req, res, next) => {
 employeeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('employee updated successfully !')
    }
  })
})

// Delete employee
router.route('/delete-employee/:id').delete((req, res, next) => {
 employeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
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