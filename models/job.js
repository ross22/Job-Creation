"use strict";
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const JobSchema = mongoose.Schema({
  name: {
    type: String
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  minexperience: {
    type: Number,
    required: true
  },
  maxexperience: {
    type: Number,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

const Job = module.exports = mongoose.model('Job', JobSchema);

module.exports.addJob = function(newJob, callback){
    console.log('called');
    Job.save(callback);
} 

module.exports.updateJob = function(id,jobdata,options,callback){
  var query = {_id: id};
	var update = {
		  name : jobdata.name,
      code : jobdata.code,
      description : jobdata.description,
      minexperience : jobdata.minexperience,
      maxexperience : jobdata.maxexperience,
      skills : jobdata.skills,
      status : jobdata.status
	}
	Job.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeJob = (id, callback) => {
	var query = {_id: id};
	Job.remove(query, callback);
}

module.exports.allJob = function(callback){
  Job.find(callback);
}

module.exports.getJobById = function(id, callback){
  Job.findById(id, callback);
}