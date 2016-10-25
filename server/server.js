var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./ORMhandlers');
var app = express();
var routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/register', routes.createUser);
app.use('/api/login', routes.checkUser);
app.use('/api/groups', routes.newGroup);
app.use('/api/membership', routes.newMember);
app.use('/api/websites', routes.createSite);
app.use('/api/markups', route.createMarkup);
app.use('/api/groups/markups', route.markupGroup);
app.use('/api/groups/sites', route.shareSite);

//export the express app
module.exports.app = app;
