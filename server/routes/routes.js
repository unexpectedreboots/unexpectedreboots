var users = require('../../db/users');
var bcrypt = require('bcrypt');
var saltRounds = 10;

// registration endpoint
exports.createUser = function(req, res) {
  var username = req.query.username || req.body.username;
  var email = req.query.email || req.body.email;
  var password = req.query.password || req.body.password;

  bcrypt.hash(password, saltRounds, function(error, hash) {
    if (error) {
      console.log(error);
    } else {
      password = hash;

      // TODO give user an individual group

      users.insertUser(username, email, password, function(err, result) {
        err ? res.send(err) : res.send(result);
      });
    }
  });
};

// check login credentials
exports.checkUser = function(req, res) {
  var username = req.query.username || req.body.username;
  var password = req.query.password || req.body.password;

  users.checkUser(username, password, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      if (result.rowCount === 0) {
        res.send('user does not exist');
      } else {        
        var retrievedPassword = result.rows[0].password;

        bcrypt.compare(password, retrievedPassword, function(err, success) {
          if (!err) res.send(success);
        });
      }
    }
  });
};

exports.updateUser = function(req, res) {
  // TODO: edit user information, e.g. password or email
  // users.updateUser(username, password, newpassword, email, newemail, callback)
  // send in old pw as new pw if user does not change it, same for email
};

// create new groups
exports.newGroup = function(req, res) {

};

// add group members
exports.newMember = function(req, res) {

};

// TODO: edit/delete group

// create new site
exports.createSite = function(req, res) {

};

// create new markup
exports.createMarkup = function(req, res) {

};

// create markup/group reference
exports.markupGroup = function(req, res) {

};

// TODO: edit/delete markup

// share site with a specific group
exports.shareSite = function(req, res) {

};
