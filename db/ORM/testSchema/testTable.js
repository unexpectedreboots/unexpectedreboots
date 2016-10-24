//include credentials (for the sequelize creds)
var Sequelize = require('sequelize');

//set up the sequelize connection
var sequelize = new Sequelize('test', 'postgres', '123', {
  dialect: 'postgres'
});

//set up the schema
var Message = sequelize.define('message', {
  text: Sequelize.STRING,
});

//export it
exports.Message = Message;
//any code that requires these schema exports will get the connection. I think