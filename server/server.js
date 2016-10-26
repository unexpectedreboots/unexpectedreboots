var express = require('express');
var bodyParser = require('body-parser');
// var handlers = require('./ORMhandlers');
var app = express();
var routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/register', routes.createUser);
app.use('/api/login', routes.checkUser);
app.use('/api/updateinfo', routes.updateUser);
app.use('/api/groups/create', routes.createGroup);
app.use('/api/groups/addmember', routes.addMember);
app.use('/api/websites', routes.createSite);
app.use('/api/markups', routes.createMarkup);
app.use('/api/groups/markups', routes.markupGroup);
app.use('/api/groups/sites', routes.shareSite);


app.listen(3000);

//export the express app
module.exports.app = app;
