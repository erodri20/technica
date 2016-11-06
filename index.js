/*
  index.js

  Starts the Express server instance on the given port, defaults to 3001.
  Universal GET uses react-router to render components.
  Axios effectively passes on requests and responses to and from Ekhoback.

*/

var express = require('express');
var path = require('path');
var axios = require('axios');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3001));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname, 'public')));

/*
// may need Access-Control-Allow-Origin
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
*/

// configure axios instance
var axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 1000,
	headers: {}
})

app.post('/signuporg', function(req, res) {
	// send post to SparkJava backend
	axiosInstance.post('/signuporg', {
		orgName: req.body.orgName,
		chapName: req.body.chapName,
		memName: req.body.memName,
		username: req.body.username,
		phoneNumber: req.body.phoneNumber,
		password: req.body.password,
		password2: req.body.password2,
	}).then(function (res) {
		console.log("express success");
		res.sendStatus(200);
	}).catch(function (error) {
		console.log("express error in signup");
		console.log(error);
		res.sendStatus(500);
	})
});

app.post('/signupmember', function(req, res) {
	// send post to SparkJava backend
	axiosInstance.post('/signupmember', {
		orgName: req.body.orgName,
		chapName: req.body.chapName,
		memName: req.body.memName,
		username: req.body.username,
		phoneNumber: req.body.phoneNumber,
	}).then(function (res) {
		console.log("express success");
		res.sendStatus(200);
	}).catch(function (error) {
		console.log("express error in signup member");
		console.log(error);
		res.sendStatus(500);
	})
});

app.post('/login', function(req, res) {
	// send post to SparkJava backend
	axiosInstance.post('/login', {
		username: req.body.username,
		password: req.body.password,
	}).then(function (res) {
		console.log("express success");
		res.sendStatus(200);
	}).catch(function (error) {
		console.log("express error in login");
		console.log(error);
		res.sendStatus(500);
	})
});


// Universal GET
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});
