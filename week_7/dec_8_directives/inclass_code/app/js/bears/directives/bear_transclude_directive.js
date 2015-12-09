module.exports = function(app) {
  app.directive('bearTranscludeDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/bear_transclude_directive.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};
