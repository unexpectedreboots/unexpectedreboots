var users = require('../../db/users');
var groups = require('../../db/groups');
var websites = require('../../db/websites');

var bcrypt = require('bcrypt');
var saltRounds = 10;
var sessions = require('express-session');
var createSession = require('../lib/utility.js').createSession;


/***************************************************
  `/API/USERS/*` ENDPOINTS
  Used for creation and management of user-based endpoints
****************************************************/

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

exports.getUserGroups = function(req, res) {
  var username = req.query.username || req.body.username;

  groups.getUserGroups(username, function(err, result) {
    err ? res.send(err) : res.send(result);
  });
}

/***************************************************
  `/API/GROUPS/*` ENDPOINTS
  Used for all endpoints relating to information shared within groups
****************************************************/

exports.getGroupMembers = function(req, res) {
  var groupID = req.query.groupID || req.body.groupID;

  groups.getGroupMembers(groupID, function(err, result) {
    err ? res.send(err) : res.send(result);
  });
}

exports.createGroup = function(req, res) {
  var groupName = req.query.groupName || req.body.groupName;
  var owner = req.query.owner || req.body.owner;

  groups.createGroup(groupName, owner, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.addMember = function(req, res) {
  var groupID = req.query.groupID || req.body.groupID;
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

  groups.addMember(groupID, username, newMember, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.editGroup = function(req, res) {
  // TODO:
  // This endpoint should allow owners to remove members from a group
};

exports.getGroupMarkups = function(req, res) {

};

exports.getGroupSites = function(req, res) {

};


/***************************************************
  `/API/WEBSITES/*` ENDPOINTS
  Used for creation and deletion of shared websites
****************************************************/

exports.createSite = function(req, res) {
  var url = req.query.url || req.body.url;
  var title = req.query.title || req.body.title;

  websites.createSite(url, title, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.shareSite = function(req, res) {
  var username = req.query.username || req.body.username;
  var groupID = req.query.groupID || req.body.groupID;
  var url = req.query.url || req.body.url;
  var title = req.query.title || req.body.title;

  /* DB query logic
  1. Try to find matching URL + title in database
  2. If match found, take the siteID
  3. If not found, create the URL + title in sites table
    -- RETURNING siteID
  4. Find userID from username
  5. Using siteID, groupID, and userID insert into sitesgroups table
  6. Use siteID, groupID, sharedtime as PK
  */

  websites.shareSite(username, groupID, url, title, function(err, success) {
    err ? res.send(err) : res.send(success);
  })

};

exports.deleteSite = function(req, res) {

};


/***************************************************
  `/API/MARKUPS/*` ENDPOINTS
  Used for creation and deletion of markups
****************************************************/

exports.createMarkup = function(req, res) {

};

exports.shareMarkup = function(req, res) {

};

exports.deleteMarkup = function(req, res) {

};
