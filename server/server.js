//setup express
var express = require('express'),
	app = express();
var routes = require('./routes/index')	

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


app.use(express.static('./client')); // setup static directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);



// start the server
var server = app.listen(3000, function() {
console.log("Started on port 3000");
var host = server.address().address;
var port = server.address().port;

});





