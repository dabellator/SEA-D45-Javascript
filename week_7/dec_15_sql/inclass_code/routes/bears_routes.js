var express = require('express');
var sql = require(__dirname + '/../sequelize_connection');
var Bear = require(__dirname + '/../models/bear');
var jsonParser = require('body-parser').json();

var bearsRouter = express.Router();

bearsRouter.get('/bears', function(req, res) {
  sql.sync().then(function() {
    return Bear.findAll({}).then(function(bears) {
      res.json(bears);
    })
  });
});

bearsRouter.post('/bears', jsonParser, function(req, res) {
  sql.sync().then(function() {
    return Bear.create(req.body)
  }).then(function(bear) {
    res.json(bear);
  });
});

module.exports = bearsRouter;
