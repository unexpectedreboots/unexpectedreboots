var app = require('./server/server').app;
var schemas = require('./db/ORM/testSchema/testTable');
//include markable schemas
var port = 3000;

//sync and add dumy data to the test table
schemas.Message.sync({ force: true })
               .then(function() {
                 console.log('Message table created in the "test" database');
                 return schemas.Message.create({text: 'Hey!!!'});
               });

//start listening
app.listen(port, function() {
  console.log('PostgreSQL is listening on ' + port);
});
