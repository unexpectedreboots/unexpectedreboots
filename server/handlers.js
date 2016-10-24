var schemas = require('../db/testSchema/testTable'); 
//add our schemas?

//set up get and set handlers that query the database
var sendBackTestMessages = function(req, res) {
  schemas.Messages.findAll().then(function(messages) {
    res.send(messages);
  });
};

var saveTestMessage = function(req, res) {
  var text = req.body.text;
  schemas.Message.create({text: text});
};

//export handlers
exports.sendBackTestMessages = sendBackTestMessages;
exports.saveTestMessage = saveTestMessage;
