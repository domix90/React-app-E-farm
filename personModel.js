const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number,
	vip: Boolean,
});

const PersonModel = new mongoose.model('Person', PersonSchema);

module.exports = PersonModel;