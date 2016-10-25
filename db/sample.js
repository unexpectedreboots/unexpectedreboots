var pg = require('pg');
var CONNECTION = 'postgres://admin:rQUNyC8W9YT7ZZBW@localhost:5432/markable'

var client = new pg.Client(CONNECTION);

var insertUser = function() {
  client.connect(function(err) {
    if (err) console.log(err);

    client.query({
      name: 'test query',
      text: 'INSERT INTO users(username, email, password) \
        VALUES($1, $2, $3)',
      values: ['test', 'test@test.com', 'password1']
    }, 

    function(err, rows) {
      client.end();
    });
  });
};

insertUser();
