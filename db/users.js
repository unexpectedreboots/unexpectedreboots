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

exports.insertUser = function(username, email, password, callback) {

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

exports.checkUser = function(username, password, callback) {

  pool.query({
    text: 'SELECT username, password FROM users \
      WHERE username = \'' + username + '\';'
  },

  function(err, success) {
    err ? callback(err, null) : callback(null, success);
  });
};

exports.updateUser = function(username, password, newPassword, email, newEmail, callback) {
  // TODO: implement user updating
}
