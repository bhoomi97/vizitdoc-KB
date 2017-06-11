var mongoose = require("mongoose");

//Model for a link
var linkSchema = new mongoose.Schema({
	link: String,
	title: String,
	description: String,
	comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Link", linkSchema);