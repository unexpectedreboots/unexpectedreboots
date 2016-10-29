var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./routes/routes');
var session = require('express-session');
var sessionChecker = require('./lib/utility.js').sessionChecker;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true 
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(session({
  secret: 'Soa8pI6QaoUsmUXR',
  resave: false,
  saveUninitialized: true
}));

// `/api/users/*` endpoints
app.use('/api/users/register', routes.createUser);
app.use('/api/users/login', routes.checkUser);
app.use('/api/users/groups', sessionChecker, routes.getUserGroups);
app.use('/api/users/markups', sessionChecker, routes.getUserMarkups)
// TODO
app.use('/api/users/update', sessionChecker, routes.updateUser);

// `/api/groups/*` endpoints
app.use('/api/groups/create', sessionChecker, routes.createGroup);
app.use('/api/groups/add', sessionChecker, routes.addMember);
app.use('/api/groups/users', sessionChecker, routes.getGroupMembers);
app.use('/api/groups/markups', sessionChecker, routes.getGroupMarkups);
app.use('/api/groups/sites', sessionChecker, routes.getGroupSites);
// TODO
app.use('/api/groups/edit', sessionChecker, routes.editGroup);

// `/api/websites/*` endpoints
app.use('/api/websites/create', sessionChecker, routes.createSite);
app.use('/api/websites/share', sessionChecker, routes.shareSite);
// TODO
app.use('/api/websites/delete', sessionChecker, routes.deleteSite);

// `/api/markups/*` endpoints
app.use('/api/markups/create', sessionChecker, routes.createMarkup);
app.use('/api/markups/share', sessionChecker, routes.shareMarkup);
app.use('/api/markups/delete', sessionChecker, routes.deleteMarkup);


// Test Routes: no authentication required
app.use('/test/groups/create', routes.createGroup);
app.use('/test/groups/add', routes.addMember);
app.use('/test/users/groups', routes.getUserGroups);
app.use('/test/groups/users', routes.getGroupMembers);
app.use('/test/websites/create', routes.createSite);
app.use('/test/websites/share', routes.shareSite);
app.use('/test/markups/create', routes.createMarkup);
app.use('/test/markups/share', routes.shareMarkup);
app.use('/test/users/markups', routes.getUserMarkups);



app.listen(3000);

//export the express app
module.exports.app = app;
