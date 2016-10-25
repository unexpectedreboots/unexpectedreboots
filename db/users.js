var pg = require('pg');
var CONNECTION = 'postgres://admin:rQUNyC8W9YT7ZZBW@localhost:5432/markable'

var client = new pg.Client(CONNECTION);

exports.insertUser = function(username, email, password, callback) {
  console.log('db insert user called for: ', username, email, password);
  client.connect(function(err) {
    if (err) console.log(err);

    client.query({
      text: 'SELECT username FROM users \
        WHERE username = \'' + username + '\';'
    },

    function(err, rows) {
      if (rows) {
        
      }
    })

    client.query({
      text: 'INSERT INTO users(username, email, password) \
        VALUES($1, $2, $3)',
      values: [username, email, password]
    },

    function(err, rows) {
      if (err) {
        callback(err, null);
        client.end();
      } else {
        callback(null, 'user creation success');
        client.end();
      }
    });
  });
};

exports.checkUser = function(username, password, callback) {
  client.connect(function(err) {
    if (err) console.log(err);

    client.query({
      text: 'SELECT username, password FROM users \
        WHERE username = \'' + username + '\';'
    },

    function(err, rows) {
      if (err) {
        callback(err, null);
        client.end();
      } else {
        console.log(rows);
        callback(null, rows);
        client.end();
      }
    });
  });
};
