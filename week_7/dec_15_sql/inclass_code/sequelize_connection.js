var Sql = require('sequelize');
var sql = new Sql('bear_dev', 'bear', 'salmons', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sql;
