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
 	passport.serializeUser(User.serializeUser());
 	passport.deserializeUser(User.deserializeUser());


//Connect DB
mongoose.connect('mongodb://localhost/knowbase');


//Render all links
Link.find({}, function(err,links){
	if(err) 
		console.log("Error.");
	else {
		console.log(links);
	}
})

//Routing
app.get("/", function(req, res){
	//If logged in Send all links

	//Else prompt to signup/ sign in
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