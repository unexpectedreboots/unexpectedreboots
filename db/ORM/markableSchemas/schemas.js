var Sequelize = require('sequelize');

var sequelize = new Sequelize('ormmarkabledb', 'postgres', '123', {
  dialect: 'postgres'
});

//define tables
var Users = sequelize.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

var Groups = sequelize.define('groups', {
  name: Sequelize.STRING,
  owner: Sequelize.STRING
});

var Markups = sequelize.define('markups', {
  anchor: Sequelize.STRING,
  text: Sequelize.STRING,
  comment: Sequelize.STRING
});

var Sites = sequelize.define('sites', {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});

var Owners = sequelize.define('owners', {
  url: Sequelize.STRING,
  title: Sequelize.STRING
});


//define relationships: (bi-directional)
//users have many markups, markups belong to one user

//groups belong to many users, users belong to many groups

//??? how to specify group belongs to one user (owner)???
//group belongs to one user, user belong to many groups

//sites have many markups, markup belongs to one site

//sites belong to many groups, groups have many sites
