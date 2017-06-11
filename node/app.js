var express = require("express"),
    bodyParser= require('body-parser');
	mongoose = require("mongoose"),
	app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// var passport = require('passport'),
// 	localStrategy = require('passport-local');

//Import Models
var Link = require('./models/link'),
	User = require('./models/user'),
	Comment = require('./models/comment')

//Auth Config
	// app.use(require('express-session')({
	// 	secret: 'qwerty',
	// 	resave: false,
	//     saveUninitialized: false
	// }));
	// app.use(passport.initialize());
 // 	app.use(passport.session());
 	// passport.serializeUser(User.serializeUser());
 	// passport.deserializeUser(User.deserializeUser());


//Connect DB
mongoose.connect('mongodb://127.0.0.1/knowbase');



//Routing
app.get("/", function(req, res){

	Link.find({},function(err,links){
		if(err) 
			console.log(err + ' is the error ');
		else {
			res.send(links)
		}
	})
	
})

// app.get("/:id/comments", function(req, res){

//     Link.findById(req.params.id).populate("comments").exec(function(err, link){
//         if(err)
//             console.log(err+ 'is th error');
//         else {
//             res.send(link)
//         }
//     });
// })

app.post("/", function(req, res){
	// get all fields
	console.log('incoming request');
	//save to db
	var newLink = { 
		title: req.body.title, 
		link: req.body.link, 
		description: req.body.description
	};

	Link.create(newLink, function(err){
		if(err) 
			console.log(err);
		else 
			console.log('New link saved to db.')
	})
})

//User Auth
// app.post("/login", 
// 	passport.authenticate('local'), 
// 	function(req, res){
// 		// Redirect to view all page.
// });

app.listen(3000, function(){
	console.log("server running .. ");
});