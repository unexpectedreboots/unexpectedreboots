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

exports.insert = function(username, email, password, callback) {

  pool.query({
    text: 'SELECT username FROM users \
      WHERE username = \'' + username + '\';'
  }, 

  function(err, rows) {
    if (rows.rowCount > 0) {
      callback('user already exists', null);
    } else {

      pool.query({
        text: 'INSERT INTO users(username, email, password) \
          VALUES($1, $2, $3)',
        values: [username, email, password]
      },

      function(err, success) {
        err ? callback(err, null) : callback(null, true);
      });
    }
  });
};

exports.check = function(username, password, callback) {

  pool.query({
    text: 'SELECT username, password FROM users \
      WHERE username = \'' + username + '\';'
  },

  function(err, success) {
    err ? callback(err, null) : callback(null, success);
  });
};

exports.update = function(username, password, newPassword, email, newEmail, callback) {
  // TODO: implement user updating
}


exports.getGroups = function(username, callback) {

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
  }, 

  function(err, rows) {
    if (err) {
      callback(err, null);
    } else {
      if (rows.rowCount === 0) {
        callback('user is not part of any groups', null);
      } else {
        callback(null, rows.rows);
      }
    }
  });
};

exports.getMarkups = function(username, callback) {

};

