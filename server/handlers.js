var schemas = require('../db/testSchema/testTable'); 
//add our schemas?

//set up get and set handlers that query the database
var sendBackTestMessages = function(req, res) {
  schemas.Message.findAll().then(function(messages) {
    res.send(messages);
  });
};

var saveTestMessage = function(req, res) {
  var text = req.body.text;
  console.log(text); //undefined
  console.log(req.body); // {}
  schemas.Message.create({text: text});
  res.send('POST recived');
};

//export handlers
exports.sendBackTestMessages = sendBackTestMessages;
exports.saveTestMessage = saveTestMessage;
