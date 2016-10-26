var users = require('../../db/users');
var groups = require('../../db/groups');

var bcrypt = require('bcrypt');
var saltRounds = 10;
var sessions = require('express-session');
var createSession = require('../lib/utility.js').createSession;

exports.createUser = function(req, res) {
  var username = req.query.username || req.body.username;
  var email = req.query.email || req.body.email;
  var password = req.query.password || req.body.password;

  bcrypt.hash(password, saltRounds, function(error, hash) {
    if (error) {
      console.log(error);
    } else {
      password = hash;

      users.insertUser(username, email, password, function(err, result) {
        if (err) {
          res.send(err)
        } else {
          createSession(req, res, username);

          var groupName = 'invisible-' + username;

          groups.createGroup(groupName, username, function(err3, success2) {
            err3 ? res.send(err3) : res.send(success2);
          });
        }
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

        bcrypt.compare(password, retrievedPassword, function(err2, success) {
          if (!err2) {
            createSession(req, res, username);
          }
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
exports.createGroup = function(req, res) {
  var groupName = req.query.groupName || req.body.groupName;
  var owner = req.query.owner || req.body.owner;

  groups.createGroup(groupName, owner, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

// add group members
exports.addMember = function(req, res) {

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
