require('angular/angular');
var angular = window.angular;

var bearStreamApp = angular.module('BearStreamApp', []);
require('./filters/filters')(bearStreamApp);
require('./services/services')(bearStreamApp);
require('./controllers/controllers')(bearStreamApp);
require('./directives/directives')(bearStreamApp);

require('./bears/bears')(bearStreamApp);
