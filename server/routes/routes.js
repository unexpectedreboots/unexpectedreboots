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
      res.send(error);
    } else {
      password = hash;

      users.insertUser(username, email, password, function(err, result) {
        if (err) {
          res.send(err)
        } else {
          createSession(req, res, username, function() {
            console.log(req.session); // TODO remove
            var groupName = 'invisible-' + username;

            groups.createGroup(groupName, username, function(err3, success2) {
              err3 ? res.send(err3) : res.send(success2);
            });
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
          if (success) {
            createSession(req, res, username, function(){
              res.send(success);
            });
          } else {
            res.send(success);
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
  var groupName = req.query.groupName || req.body.groupName;
  var username = req.query.username || req.body.username;
  var newMember = req.query.newMember || req.body.newMember;

  /*
  Logical checks for DB:
  1. Get user ID from username
  2. Get group ID from groupname
  3. Check if user ID = owner of group ID --> callback false
  4. Get newmember ID from newmember username
  5. Check if new member already exists in UG join table --> callback false
  6. Check if group is full --> callback false
  7. Insert member + group into UG join table 
  */

  groups.addMember(groupName, username, newMember, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
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
