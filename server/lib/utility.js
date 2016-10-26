exports.sessionChecker = function(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.send('session not validated');
  }
};

exports.createSession = function(req, res, username) {
  return req.session.regenerate(function() {
    req.session.user = username;
  }); 
};