'use strict';

// models/task

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema = new Schema({
	title: String,
	description: String,
});

module.exports = mongoose.model('Task', TaskSchema);