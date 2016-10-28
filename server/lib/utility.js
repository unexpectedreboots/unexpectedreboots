exports.sessionChecker = function(req, res, next) {
  req.session.username ? next() : res.send('session not validated');
};

exports.createSession = function(req, res, username, callback) {
  req.session.regenerate(function() {
    req.session.username = username;
    callback();
  }); 
}; 