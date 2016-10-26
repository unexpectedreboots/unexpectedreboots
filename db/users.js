var pg = require('pg');
var Pool = require('pg').Pool;

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
  })

  pool.query({
    text: 'INSERT INTO users(username, email, password) \
      VALUES($1, $2, $3)',
    values: [username, email, password]
  },

  function(err, success) {
    err ? callback(err, null) : callback(null, true);
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
