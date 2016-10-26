var express = require('express');
var bodyParser = require('body-parser');
// var handlers = require('./ORMhandlers');
var app = express();
var routes = require('./routes/routes');
var session = require('session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware
app.use(session({
  secret: 'somesupersecret',
  resave: false,
  saveUnitialized: true
}));
  //check to see if request has session for everything except register and login

  //
// Routes
app.use('/api/register', routes.createUser);
app.use('/api/login', routes.checkUser);
app.use('/api/groups', routes.newGroup);
app.use('/api/membership', routes.newMember);
app.use('/api/websites', routes.createSite);
app.use('/api/markups', routes.createMarkup);
app.use('/api/groups/markups', routes.markupGroup);
app.use('/api/groups/sites', routes.shareSite);


app.listen(3000);

//export the express app
module.exports.app = app;
