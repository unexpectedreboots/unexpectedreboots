var users = require('../../db/users');
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
          createSession(req,res, username);
          res.send(result);
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

        bcrypt.compare(password, retrievedPassword, function(err, success) {
          if (!err) {
            createSession(req,res,username);
            res.send(success);
          }
        });
      }
    }
  });
};

// TODO: edit/delete user

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
