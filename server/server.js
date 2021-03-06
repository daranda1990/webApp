//setup express
var express = require('express'),
	app = express();

//set up routes
var routeAuth = require('./routes/auth')	


//setup http parser structure and filesystem
var bodyParser = require('body-parser'),
	jsonParser = bodyParser.json();
	

//setup mongoose for mongoDB
var mongoose = require('mongoose'),
	dbURL = 'mongodb://test:test@ds059694.mongolab.com:59694/genni';
	mongoose.connect(dbURL);

var db = mongoose.connection;
db.on('error', function (err) {
console.log('MongoDB connection error', err);
});
db.once('open', function () {
console.log('MongoDB connected.');
});


// passport config
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	cookieParser = require('cookie-parser'),
	Person = require('./models/personSchema');
	

app.use(express.static('../app')); // setup static directory
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routeAuth);


// start the server
var server = app.listen(3004, function() {
console.log("Started on port 3004");
var host = server.address().address;
var port = server.address().port;

});





