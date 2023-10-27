const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	contactno: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	salary: {
		type: String,
		required: true,
	},
	joiningdate: {
		type: String,
		required: true,
	},
	releivingdate: {
		type: String,
		default:""
	},
	status: {
		type:String,
		enum: ['active','inactive'],
		required: true,
	}
});

module.exports = mongoose.model("User", userSchema);
