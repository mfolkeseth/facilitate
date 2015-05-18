'use strict';

// models/user

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	surName: String,
	email: String
});

module.exports = mongoose.model('User', UserSchema);