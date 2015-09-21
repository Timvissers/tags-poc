'use strict';

angular.module('myApp.angular-tagger', ['ngRoute', 'tagger'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/angular-tagger', {
    templateUrl: 'angular-tagger/angular-tagger.html',
    controller: 'angular-taggerCtrl'
  });
}])

.controller('angular-taggerCtrl', ['$scope', function($scope) {
      $scope.tags = ["Markdown", "Ruby"];
}]);