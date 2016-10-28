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

exports.create = function(url, title, callback) {

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

exports.share = function(username, groupID, url, title, callback) {

  console.log('/**', username, 'is sharing:', url, '(', title, ') with group:', groupID);

  var siteID;

  pool.query({
    // attempt to find the existing site in the DB
    text: 'SELECT * FROM sites \
      WHERE url = \'' + url + '\' \
      AND title = \'' + title + '\';'
  },

  function(err, rows) {
    if (err) {
      callback(err, null);
    } else {
      if (rows.rowCount > 0) {
        siteID = rows.rows[0].id;

        pool.query({
          text: 'INSERT INTO sitesgroups \
            VALUES ( ' +
              groupID + ', ' +
              siteID + ', ' +
              '( \
              SELECT u.id FROM users u \
              WHERE u.username = \'' + username + '\' \
              ) \
            );'
        },

        function(err2, rows2) {
          err2 ? callback(err3, null) : callback(null, true);
        });
      } else {

        pool.query({
          text: 'INSERT INTO sites(url, title) \
            VALUES($1, $2) \
            RETURNING *',
          values: [url, title]
        },

        function(err3, rows3) {
          if (err3) {
            callback(err3, null);
          } else {

            siteID = rows3.rows[0].id;

            pool.query({
              text: 'INSERT INTO sitesgroups \
                VALUES ( ' +
                  groupID + ', ' +
                  siteID + ', ' +
                  '( \
                  SELECT u.id FROM users u \
                  WHERE u.username = \'' + username + '\' \
                  ) \
                );'
            },

            function(err4, rows4) {
              err4 ? callback(err4, null) : callback(null, true);
            });
          }
        });
      }
    }
  });
};