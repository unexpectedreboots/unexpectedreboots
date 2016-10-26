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
app.use('/api/register', routes.createUser);
app.use('/api/login', routes.checkUser);
<<<<<<< HEAD
app.use('/api/groups', sessionChecker, routes.newGroup);
app.use('/api/membership', sessionChecker, routes.newMember);
app.use('/api/websites', sessionChecker, routes.createSite);
app.use('/api/markups', sessionChecker, routes.createMarkup);
app.use('/api/groups/markups', sessionChecker, routes.markupGroup);
app.use('/api/groups/sites', sessionChecker, routes.shareSite);
=======
app.use('/api/updateinfo', routes.updateUser);
app.use('/api/groups/create', routes.createGroup);
app.use('/api/groups/addmember', routes.addMember);
app.use('/api/websites', routes.createSite);
app.use('/api/markups', routes.createMarkup);
app.use('/api/groups/markups', routes.markupGroup);
app.use('/api/groups/sites', routes.shareSite);
>>>>>>> b226182ffbeaf1b5c4b3322d04bb8b4bc8714f50


app.listen(3000);

//export the express app
module.exports.app = app;
