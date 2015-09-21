'use strict';

angular.module('myApp.ng-tags-input', ['ngRoute', 'ngTagsInput'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ng-tags-input', {
    templateUrl: 'ng-tags-input/ng-tags-input.html',
    controller: 'ng-tags-inputCtrl'
  });
}])

.controller('ng-tags-inputCtrl', ['$scope', function($scope) {
      $scope.tags = [
        { text: 'just' },
        { text: 'some' },
        { text: 'cool' },
        { text: 'tags' }
      ];
}]);