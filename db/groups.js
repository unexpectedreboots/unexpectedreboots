var pg = require('pg');
var Pool = require('pg').Pool;
var Promise = require('es6-promise').Promise;

var CONFIG = {
  host: 'localhost',
  user: 'admin',
  password: 'rQUNyC8W9YT7ZZBW',
  database: 'markable'
};

var pool = new Pool(CONFIG);

exports.createGroup = function(groupName, owner, callback) {

  pool.query({
    text: 'SELECT ug.groupid, ug.userid FROM users u \
      LEFT JOIN usersgroups ug \
      ON u.id = ug.userid \
      LEFT JOIN groups g \
      ON g.id = ug.groupid \
      WHERE ug.userid IN ( \
        SELECT u.id FROM users u \
        WHERE u.username = \'' + owner + '\' \
      ) \
      AND g.name = \'' + groupName + '\';'
  },

  function(err, rows) {
    if (rows.rowCount > 0) {
      callback('duplicate group name for specified user', null);
    } else {

      pool.query({
        text: 'SELECT u.id FROM users u \
        WHERE u.username = \'' + owner + '\''
      },

      function(err2, rows2) {
        var ownerID = rows2.rows[0].id;

        pool.query({
          text: 'INSERT INTO groups(name, owner) \
            VALUES($1, $2) \
            RETURNING *',
          values: [groupName, ownerID]
        },

        function(err3, rows3) {
          var groupID = rows3.rows[0].id;

          pool.query({
            text: 'INSERT INTO usersgroups(userid, groupid) \
              VALUES ($1, $2)',
            values: [ownerID, groupID]
          }, 

          function(err4, rows4) {
            err4 ? callback(false, null) : callback(null, true);
          });
        });
      });
    }
  });
};

exports.addMember = function(groupID, username, newMember, callback) {

  pool.query({
    // check if new user exists
    text: 'SELECT u.id AS userid FROM users u \
      WHERE u.username = \'' + newMember + '\';'
  }, 

  function(err, rows) {
    if (rows.rowCount === 0) {
      callback('new user does not exist', null);
    } else {

      pool.query({
        // retrieve ownerID, groupID & check if current user is owner of group
        text: 'SELECT u.id AS userid, g.id AS groupid FROM users u \
          LEFT JOIN usersgroups ug \
          ON u.id = ug.userid \
          LEFT JOIN groups g \
          on g.id = ug.groupid \
          WHERE u.username = \'' + username + '\' \
          AND g.id = \'' + groupID + '\''
      }, 

      function(err2, rows2) {
        if (rows2.rowCount === 0) {
          callback('current user is not the owner of specified group', null);
        } else {
          var ownerID = rows2.rows[0].userid;
          
          pool.query({
            // check if new member already has membership to specified group
            text: 'SELECT u.id AS userid FROM users u \
            WHERE u.username = \'' + newMember + '\' \
            AND u.id IN ( \
              SELECT ug.userid FROM usersgroups ug \
              WHERE ug.groupid = \'' + groupID + '\' \
            )'
          },

          function(err3, rows3) {
            if (rows3.rowCount > 0) {
              callback('cannot add a user that is already a member of the group', null);
            } else {

              pool.query({
                // check if group is full
                text: 'SELECT * FROM usersgroups ug \
                WHERE ug.groupid = \'' + groupID + '\''
              },

              function(err4, rows4) {
                if (rows4.rowCount >= 6) {
                  callback('group is full', null);
                } else {

                  pool.query({
                    // select newmemberID and insert it into the relevant group
                    text: 'INSERT INTO usersgroups \
                      VALUES ( \
                        ( \
                        SELECT u.id FROM users u \
                        WHERE u.username = \'' + newMember + '\' \
                        ),' +
                        groupID +
                      ');'
                  }, 

                  function(err5, rows5) {
                    err5 ? callback(err5, null) : callback(null, true);
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

exports.getUserGroups = function(username, callback) {

  pool.query({
    // find all groups user is a part of (and their owners)
    text: 'SELECT u.id AS userid, g.id AS groupid, g.name AS groupname, \
      g.owner AS groupowner FROM users u \
      LEFT JOIN usersgroups ug \
      ON u.id = ug.userid \
      LEFT JOIN groups g \
      ON g.id = ug.groupid \
      WHERE userid IN ( \
        SELECT u.id FROM users u \
        WHERE u.username = \'' + username + '\' \
      );'
      // TODO implement invisible-group ignore
  }, 

  function(err, rows) {
    if (rows.rowCount === 0) {
      callback('user is not part of any groups', null);
    } else {
      err ? callback(err, null) : callback(null, rows.rows);
    }
  });
};

exports.getGroupMembers = function(groupID, callback) {

  pool.query({
    text: 'SELECT member, groupname, u2.username AS owner FROM ( \
      SELECT u.username AS member, g.name AS groupname, g.owner AS ownerid \
      FROM users u \
      LEFT JOIN usersgroups ug \
      ON u.id = ug.userid \
      LEFT JOIN groups g \
      ON g.id = ug.groupid \
      WHERE g.id = \'' + groupID + '\' \
      ) chris LEFT JOIN users u2 \
      ON chris.ownerid = u2.id'
  },

  function(err, rows) {
    if (rows.rowCount === 0) {
      callback('group has no members', null);
    } else {
      err ? callback(err, null) : callback(null, rows.rows);
    }
  });
};