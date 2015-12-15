var Sql = require('sequelize');
var sql = require(__dirname + '/../sequelize_connection');

var Bear = sql.define('bear', {
  name: Sql.STRING,
  fishPreference: Sql.STRING
});

module.exports = Bear;
