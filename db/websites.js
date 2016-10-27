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

exports.createSite = function(url, title, callback) {
  pool.query({
    // check if website already exists
    text: 'SELECT * FROM sites \
      WHERE url = \'' + url + '\' \
      AND title = \'' + title + '\''
  },

  function(err, rows) {
    if (rows.rowCount > 0) {
      callback('website already exists', null);
    } else {

      pool.query({
        text: 'INSERT INTO sites(url, title) \
          VALUES($1, $2)',
        values: [url, title]
      },

      function(err2, rows2) {
        err2 ? callback(err2, null) : callback(true, null);
      });
    }
  });
};
