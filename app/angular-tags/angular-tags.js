'use strict';

angular.module('myApp.angular-tags', ['ngRoute', 'decipher.tags', 'ui.bootstrap.typeahead'])

.config(['$routeProvider', 'decipherTagsOptions', function($routeProvider, decipherTagsOptions) {
  $routeProvider.when('/angular-tags', {
    templateUrl: 'angular-tags/angular-tags.html',
    controller: 'angular-tagsCtrl'
  });
  decipherTagsOptions.templateUrl = 'app/angular-tags/templates/tags.html';
}])

.controller('angular-tagsCtrl', ['$scope', function($scope) {
    $scope.tags = [
        {name : 'fish'},
        {name : 'dog'},
        {name : 'horse'}
    ];
}]);