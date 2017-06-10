var mongoose = require("mongoose");

//Model for a link
var linkSchema = new mongoose.Schema({
	link: String,
	title: String,
	description: String
});

module.exports = mongoose.model("Link", linkSchema);