var express = require('express');
var bodyParser = require('body-parser');
// var handlers = require('./ORMhandlers');
var app = express();
var routes = require('./routes/routes');
var session = require('express-session');
var sessionChecker = require('./lib/utility.js').sessionChecker;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware
app.use(session({
  secret: 'somesupersecret',
  resave: false,
  saveUninitialized: true
}));
  //check to see if request has session for everything except register and login

// Routes
app.use('/api/users/register', routes.createUser);
app.use('/api/users/login', routes.checkUser);
app.use('/api/users/update', sessionChecker, routes.updateUser);
app.use('/api/groups/create', sessionChecker, routes.createGroup);
app.use('/api/groups/add', sessionChecker, routes.addMember);
app.use('/api/websites/create', sessionChecker, routes.createSite);
app.use('/api/markups/create', sessionChecker, routes.createMarkup);
app.use('/api/groups/markups', sessionChecker, routes.markupGroup);
app.use('/api/groups/sites', sessionChecker, routes.shareSite);



app.listen(3000);

//export the express app
module.exports.app = app;
