'use strict';

// models/task

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TaskSchema = new Schema({
	title: String,
	description: String,
	attachements: Array,
	publishDate: Date,
	startDate: Date,
	dueDate: Date,
	reoccurence: Date,
	status: String,
	assignedUser: String,
	subscribers: Array,
	location: String,
	company: String,
	comments: Array,
});

module.exports = mongoose.model('Task', TaskSchema);