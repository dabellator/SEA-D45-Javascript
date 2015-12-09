module.exports = function(app) {
  app.directive('bearDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/bear_directive_template.html',
      scope: {
        bear: '=',
      }
    }
  });
};
