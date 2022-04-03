const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
	firstName: { type: String, require: true },
	lastName:{ type: String, require: true },
	profilepic: [{ type: String, require: true }],
});

module.exports = mongoose.model('users', usersSchema);
