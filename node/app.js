var express = require("express"),
	mongoose = require("mongoose"),
	app = express();

var passport = require('passport'),
	localStrategy = require('passport-local');

//Import Models
var Link = require('./models/link'),
	User = require('./models/user')

//Auth Config
	app.use(require('express-session')({
		secret: 'qwerty',
		resave: false,
	    saveUninitialized: false
	}));
	app.use(passport.initialize());
 	app.use(passport.session());
 	// passport.serializeUser(User.serializeUser());
 	// passport.deserializeUser(User.deserializeUser());


//Connect DB
mongoose.connect('mongodb://127.0.0.1/knowbase');


//Render all links
// Link.find({}, function(err,links){
// 	if(err) 
// 		console.log("Error.");
// 	else {
// 		console.log(links);
// 	}
// })

//Routing
app.get("/", function(req, res){

	Link.find({}, function(err,links){
		if(err) 
			console.log("Error.");
		else {
			// var json = JSON.stringify(links);
			// res.send(JSON.parse(json))
			res.send(links)
		}
	})
	
})

app.post("/", function(req, res){

})

//User Auth
app.post("/login", 
	passport.authenticate('local'), 
	function(req, res){
		// Redirect to view all page.
});

app.listen(3000, function(){
	console.log("server running .. ");
});