"use strict";
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Job = require('../models/job');

// Register
router.post('/createjob', (req, res, next) => {
  let newJob = new Job({
    name: req.body.name,
    code: req.body.code,
    description: req.body.description,
    minexperience: req.body.minexperience,
    maxexperience: req.body.maxexperience,
    skills : req.body.skills,
    status : req.body.status
  });

  Job.addJob(newJob, (err, job) => {
    if(err){
      res.json({success: false, msg:'Failed to create job'});
    } else {
      res.json({success: true, msg:'Job Created'});
    }
  });
});

router.get('/getAllJobs',(req,res) => {
  Job.allJob((err, jobs) => {
    if(err){
      res.json({success: false, msg:'Failed to retrieve job'});
    } else {
      res.json(jobs);
    }
  });

});

router.get('/job/:_id',(req,res) => {
  Job.getJobById(req.params._id, (err, job) => {
    if(err){
      res.json({success: false, msg:'Failed to retrieve job'});
    } else {
      res.json(job);
    }
  });

});

router.get('/login', (req, res, next) => {
    res.send('Login');
});

module.exports = router;