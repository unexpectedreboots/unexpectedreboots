// var request = require('request');
exports.sessionChecker = function(req,res,next) {
  if(req.session.username) {
    console.log('session found');
    next();
  } else {
    console.log('session not found');
    res.send('session not validated');
    res.end();
  }
  //
}

exports.createSession = function(req,res,username) {
  return req.session.regenerate(function() {
    req.session.user = username;
  }); 
};