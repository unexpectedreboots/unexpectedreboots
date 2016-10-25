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


//define relationships: 
//users have many markups, markups belong to one user
Users.hasMany(Markups, {as: 'UserMarkups'});

//groups belong to many users, users belong to many groups
Groups.belongsToMany(User, {through: 'User_Group'});
User.belongsToMany(Groups, {through: 'User_Group'});

//user has many groups, group belongs to one user
Users.hasMany(Groups, {as: 'GroupOwner'});

//sites have many markups, markup belongs to one site
Sites.hasMany(Markups, {as: 'SiteMarkups'});

//sites belong to many groups, groups have many sites
Sites.belongsToMany(Groups, {through: 'Group_Site'});
Groups.belongsToMany(Sites, {through: 'Group_Site'});

module.exports = {
  Users: Users,
  Groups: Groups,
  Markups: Markups,
  Sites: Sites
};
