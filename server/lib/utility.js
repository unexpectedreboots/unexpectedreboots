exports.sessionChecker = function(req, res, next) {
  console.log(req.session, 'req.session on session checker');
  if (req.session.username) {
    next();
  } else {
    res.send('session not validated');
  }
};

exports.createSession = function(req, res, username, callback) {
  req.session.regenerate(function() {
    req.session.username = username;
    callback();
  }); 
}; 