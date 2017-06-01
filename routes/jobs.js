"use strict";
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Job = require('../models/job');

// Register
router.post('/createjob', (req, res, next) => {
  let newJob = req.body;

  Job.addJob(newJob, (err, job) => {
    if(err){
      res.json({success: false, msg:'Failed to create job'});
    } else {
      res.json({success: true, msg:'Job Created'});
    }
  });
});

router.put('/updateJob/:_id', (req, res, next) => {
  let newJob = req.body;
  let id = req.params._id;
  Job.updateJob(id,newJob,{}, (err, job) => {
    if(err){
      res.json({success: false, msg:'Failed to update job'});
    } else {
      res.json({success: true, msg:'Job updated'});
    }
  });
});

router.delete('/deletejob/:_id', (req, res) => {
	var id = req.params._id;
	Job.removeJob(id, (err, job) => {
		if(err){
      res.json({success: false, msg:'Failed to delete job'});
    } else {
      res.json({success: true, msg:'Job deleted'});
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