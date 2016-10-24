//credentials (for the session secret)
var express = require('express');
//bcrypt
var bodyParser = require('body-parser');
//express session
var handlers = require('./handlers');
var app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up get and set routes
app.get('/test', handlers.sendBackTestMessages);

app.post('/test', handlers.saveTestMessage);


//export the express app
module.exports.app = app;
