var users = require('../../db/users');
var groups = require('../../db/groups');
var websites = require('../../db/websites');
var markups = require('../../db/markups');

var bcrypt = require('bcrypt');
var saltRounds = 10;
var sessions = require('express-session');
var createSession = require('../lib/utility.js').createSession;


/***************************************************
  `/API/USERS/*` ENDPOINTS
  Used for creation and management of user-based endpoints
  -- POST ENDPOINTS --
****************************************************/

exports.createUser = function(req, res) {
  var username = req.query.username || req.body.username;
  var email = req.query.email || req.body.email;
  var password = req.query.password || req.body.password;

  console.log('!!! Creating new user: ', username, email, password, '!!!');

  bcrypt.hash(password, saltRounds, function(error, hash) {
    if (error) {
      res.send(error);
    } else {
      password = hash;

      users.insert(username, email, password, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          createSession(req, res, username, function() {
            res.send(result);
          });
        }
      });
    }
  });
};

exports.checkUser = function(req, res) {
  var username = req.query.username || req.body.username;
  var password = req.query.password || req.body.password;

  users.check(username, password, function(err, result) {
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
            res.send(err2);
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

/***************************************************
  `/API/USERS/*` ENDPOINTS
  Used for creation and management of user-based endpoints
  -- GET ENDPOINTS --
****************************************************/

exports.getUserGroups = function(req, res) {
  var username = req.query.username || req.body.username;

  users.getGroups(username, function(err, result) {
    err ? res.send(err) : res.send(result);
  });
};

exports.getUserMarkups = function(req, res) {
  var username = req.query.username || req.body.username;

  users.getMarkups(username, function(err, result) {
    err ? res.send(err) : res.send(result);
  });
};


/***************************************************
  `/API/GROUPS/*` ENDPOINTS
  Used for all endpoints relating to information shared within groups
****************************************************/

exports.getGroupMembers = function(req, res) {
  var groupID = req.query.groupID || req.body.groupID;

  groups.getMembers(groupID, function(err, result) {
    err ? res.send(err) : res.send(result);
  });
}

exports.createGroup = function(req, res) {
  var groupName = req.query.groupName || req.body.groupName;
  var owner = req.query.owner || req.body.owner;

  groups.create(groupName, owner, function(err, success) {
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

  groups.add(groupID, username, newMember, function(err, success) {
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

  websites.create(url, title, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.shareSite = function(req, res) {
  var username = req.query.username || req.body.username;
  var groupID = req.query.groupID || req.body.groupID;
  var url = req.query.url || req.body.url;
  var title = req.query.title || req.body.title;

  /* DB query logic
  1. Create the URL + title in sites table
    -- RETURNING siteID
  2. Find userID from username
  3. Using siteID, groupID, and userID insert into sitesgroups table
  4. Use siteID, groupID, sharedtime as PK
  */

  websites.share(username, groupID, url, title, function(err, success) {
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
  var url = req.query.url || req.body.url;
  var title = req.query.title || req.body.title;
  var username = req.query.username || req.body.username;
  var anchor = req.query.anchor || req.body.anchor;
  var text = req.query.text || req.body.text;
  var comment = req.query.comment || req.body.comment;

  /** 
  DB Logic for markup creation:
  1. Find userID from username
  2. Find siteID from site, if found, use siteID
  3. If not found, insert site and use siteID
  4. Insert into markup table:
    siteID, authorID, anchor, text, comment
  5. Callback true
  **/

  markups.create(url, title, username, anchor, text, comment, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.shareMarkup = function(req, res) {
  var url = req.query.url || req.body.url;
  var title = req.query.title || req.body.title;
  var username = req.query.username || req.body.username;
  var anchor = req.query.anchor || req.body.anchor;
  var text = req.query.text || req.body.text;
  var comment = req.query.comment || req.body.comment;
  var groupID = req.query.groupID || req.body.groupID;

  /** 
  DB Logic for markup sharing:
  1. Find userID from username
  2. Find siteID from site, if found, use siteID
  3. If not found, insert site and use siteID
  4. Insert into markup table:
    siteID, authorID, anchor, text, comment
    >> returning markupID
  5. Insert into markupsgroups table:
    markupID, groupID
  **/

  markups.share(url, title, username, anchor, text, comment, function(err, success) {
    err ? res.send(err) : res.send(success);
  });
};

exports.deleteMarkup = function(req, res) {

};
